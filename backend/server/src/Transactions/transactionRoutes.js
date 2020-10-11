import express from 'express';
import Transaction from './transactionsController';

const TransactionRoutes = express.Router();

TransactionRoutes.get('/history', Transaction.getHistory);

TransactionRoutes.post('/create', Transaction.create);

TransactionRoutes.get('/', Transaction.findById);

export default TransactionRoutes;
