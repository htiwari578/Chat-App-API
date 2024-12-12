import express from 'express';
import { getMessage, sendMessage } from '../controller/message.js';
import isAuthenticated from '../middleware/isAuth.js';



const router = express.Router();


router.route('/send/:id').post(isAuthenticated, sendMessage);
router.route('/:id').get(isAuthenticated, getMessage);



export default router;