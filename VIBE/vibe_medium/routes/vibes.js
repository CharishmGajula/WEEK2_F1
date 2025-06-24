import express from 'express';
import {send_vibe} from '../controller/controller.js';


const router = express.Router();
router.post('/vibe_post',send_vibe);

export default router;

