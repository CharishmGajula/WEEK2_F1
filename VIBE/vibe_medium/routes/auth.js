import express from 'express';
import { signup } from '../controller/controller.js';
import { get_user } from '../controller/controller.js';

const router = express.Router();

router.post('/signup', signup);
router.get('/user',get_user);
export default router;
