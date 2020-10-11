import cache from 'memory-cache';
import uuid from 'uuid';

const getHistory = async (req, res) => {
  const history = cache.get('transactions');
  return res.status(200).send({ history: history || [] });
};

const create = async (req, res) => {
  const { type = null, amount = 0 } = req.body;

  if (!type || !amount) return res.status(400).send({
    message: 'type and amount are required for this operation'
  });

  if (type !== 'debit' && type !== 'credit') return res.status(400).send({
    message: 'Invalid type operation'
  });

  const currentBalance = cache.get('user-balance');
  const nextBalance = type === 'credit' ? currentBalance + amount : currentBalance - amount;

  if (nextBalance < 0) return res.status(406).send({
    message: 'Invalid operation'
  });

  cache.put('user-balance', nextBalance);
  
  let transactions = cache.get('transactions');
  if (!transactions) transactions = [];

  const transaction = {
    created_at: new Date(),
    type,
    amount,
    id: uuid.v4()
  };

  const nextTransactions = [...transactions, transaction];
  
  cache.put('transactions', nextTransactions);

  return res.status(200).send({ message: `User balance ${type} successfuly` });
};

const findById = async (req, res) => {
  const { transactionId = null } = req.query;

  if (!transactionId) return res.status(400).send({
    message: 'transactionId is a required parameters for this operation'
  });

  let transactions = cache.get('transactions');
  if (!transactions) transactions = []; 

  const transaction = transactions.find(current => current.id === transactionId);

  if (!transaction) return res.status(404).send({
    message: 'transaction not found'
  });

  return res.status(200).send({ transaction });
}

export default {
  getHistory,
  create,
  findById
};
