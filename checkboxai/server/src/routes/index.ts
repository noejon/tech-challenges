import express from 'express';
import { greetController } from '../controllers/greet';

const router = express.Router();

router.get('/greet', greetController);

export { router };
