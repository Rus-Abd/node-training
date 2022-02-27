const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: '../../.env' });
import { Request, Response } from 'express';
// dotenv.config({ path: '../../.env' });
const todosCollection = mongoose.model('todos', {
  message: String,
  completd: Boolean,
  id: String,
});
const router = express.Router();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// READ ALL
router.get('/', async (req: Request, res: Response, next: Function) => {
  try {
    await todosCollection.find().limit(10);
    res.json({ message: 'Hello read all' });
  } catch (error) {
    next(error);
  }
});

// READ ONE
router.get('/:id', (req: Request, res: Response) => {
  res.json({ message: 'Hello read one' });
});

// CREATE ONE

router.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Hello create one' });
});

// EDIT ONE

router.patch('/:id', (req: Request, res: Response) => {
  res.json({ message: 'Hello edit one' });
});

// delete

router.delete('/:id', (req: Request, res: Response) => {
  res.json({ message: 'Hello delete one' });
});
module.exports = router;
export {};
