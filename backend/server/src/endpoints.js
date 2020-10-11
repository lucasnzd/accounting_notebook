import express from 'express';
import TransactionRoutes from './Transactions/transactionRoutes';
import UserRoutes from './User/usersRoutes';

const eRoutes = express.Router();

eRoutes.use('/transaction', TransactionRoutes);
eRoutes.use('/user', UserRoutes);

export default eRoutes;
