import express from 'express';
import User from './usersController';

const UserRoutes = express.Router();

UserRoutes.get('/balance', User.getBalance);

export default UserRoutes;
