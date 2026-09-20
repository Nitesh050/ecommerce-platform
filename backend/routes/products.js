const express = require('express');
const router = express.Router();
const db = require('../database');

// GET /products - list all products
router.get('/', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products');
  res.json(rows);
});

// GET /products/:id - get one product
router.get('/:id', async (req, res) => {
  const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
  if (rows.length === 0) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(rows[0]);
});

// POST /products - create a new product
router.post('/', async (req, res) => {
  const { name, price, description, image, stock_quantity } = req.body;
  const [result] = await db.query(
    'INSERT INTO products (name, price, description, image, stock_quantity) VALUES (?, ?, ?, ?, ?)',
    [name, price, description, image, stock_quantity || 0]
  );
  res.status(201).json({ id: result.insertId, name, price, description, image, stock_quantity });
});

// PUT /products/:id - update a product
router.put('/:id', async (req, res) => {
  const { name, price, description, image, stock_quantity } = req.body;
  const [result] = await db.query(
    'UPDATE products SET name = ?, price = ?, description = ?, image = ?, stock_quantity = ? WHERE id = ?',
    [name, price, description, image, stock_quantity, req.params.id]
  );
  if (result.affectedRows === 0) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json({ id: req.params.id, name, price, description, image, stock_quantity });
});

// DELETE /products/:id - delete a product
router.delete('/:id', async (req, res) => {
  const [result] = await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
  if (result.affectedRows === 0) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.status(204).send();
});

module.exports = router;
