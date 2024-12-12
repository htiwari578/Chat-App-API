import express from 'express';
import { sendMessage } from '../controller/message.js';
import isAuthenticated from '../middleware/isAuth.js';



const router = express.Router();


router.route('/send/:id').post(isAuthenticated, sendMessage);



export default router;