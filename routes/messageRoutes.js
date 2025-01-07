import express from 'express';
const router = express.Router();
import {getAllMessages, updateMessage, deleteMessage} from '../controllers/messageController.js';

router.get('/messages',getAllMessages);
router.put('/messages/:id',updateMessage);
router.delete('/messages/:id',deleteMessage);

export default router;