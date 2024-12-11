import express from 'express';
import { getOtherUser, login, logout, register } from '../controller/user.controllers.js';
import isAuthenticated from '../middleware/isAuth.js';

const router = express.Router();


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/').get(isAuthenticated, getOtherUser);


export default router;