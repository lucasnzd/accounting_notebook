import cache from 'memory-cache';

const getBalance = async (req, res) => {
  const currentBalance = cache.get('user-balance');
  return res.status(200).send({ balance: currentBalance || 0 });
};

export default {
  getBalance
};
