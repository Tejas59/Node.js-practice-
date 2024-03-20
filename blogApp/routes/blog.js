import express from 'express';
import {createComment} from '../controller/commentController.js';
const router = express.Router();

router.post('/createcomment', createComment);




export default router;