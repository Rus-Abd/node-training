import { Router } from 'express';
import express = require('express');
// const express = require('express');
export const router = express.Router();

// READ ALL
router.get('/', (req, res, next) => {
  res.json({
    message: 'Hello Read ALL',
  });
});

// READ ONE
router.get('/:id', (req, res, next) => {
  res.json({
    message: 'Hello Read one',
  });
});

// create one
router.post('/', (req, res, next) => {
  res.json({
    message: 'Hello create one',
  });
});

// Edit one
router.patch('/:id', (req, res, next) => {
  res.json({
    message: 'Hello edit one',
  });
});

// delete one
router.delete('/:id', (req, res, next) => {
  res.json({
    message: 'Hello delete one',
  });
});
// module.exports(router);
