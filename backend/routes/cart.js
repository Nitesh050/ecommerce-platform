const express = require('express');
const router = express.Router();
const db = require('../database');
const authenticateToken = require('../middleware/auth');

async function getCartForUser(userId) {
  const [rows] = await db.query(
    `SELECT products.id AS id, products.name AS name, products.price AS price,
            products.image AS image, cart_items.quantity AS quantity
     FROM cart_items
     JOIN products ON cart_items.product_id = products.id
     WHERE cart_items.user_id = ?`,
    [userId]
  );
  return rows;
}

// GET /cart - the logged-in user's cart
router.get('/', authenticateToken, async (req, res) => {
  try {
    const cart = await getCartForUser(req.user.userId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Could not load cart' });
  }
});

// POST /cart - add a product (or bump its quantity if already in the cart)
router.post('/', authenticateToken, async (req, res) => {
  const { productId, quantity } = req.body;

  if (!productId) {
    return res.status(400).json({ error: 'productId is required' });
  }

  const qty = quantity || 1;

  try {
    await db.query(
      `INSERT INTO cart_items (user_id, product_id, quantity)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE quantity = quantity + ?`,
      [req.user.userId, productId, qty, qty]
    );

    const cart = await getCartForUser(req.user.userId);
    res.status(201).json(cart);
  } catch (err) {
    if (err.code === 'ER_NO_REFERENCED_ROW_2' || err.code === 'ER_NO_REFERENCED_ROW') {
      return res.status(400).json({ error: 'That product does not exist' });
    }
    res.status(500).json({ error: 'Could not add item to cart' });
  }
});

// PUT /cart/:productId - set an exact quantity
router.put('/:productId', authenticateToken, async (req, res) => {
  const { quantity } = req.body;

  if (!quantity || quantity < 1) {
    return res.status(400).json({ error: 'quantity must be at least 1' });
  }

  try {
    const [result] = await db.query(
      'UPDATE cart_items SET quantity = ? WHERE user_id = ? AND product_id = ?',
      [quantity, req.user.userId, req.params.productId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not in cart' });
    }

    const cart = await getCartForUser(req.user.userId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Could not update cart' });
  }
});

// DELETE /cart/:productId - remove a product from the cart
router.delete('/:productId', authenticateToken, async (req, res) => {
  try {
    const [result] = await db.query(
      'DELETE FROM cart_items WHERE user_id = ? AND product_id = ?',
      [req.user.userId, req.params.productId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Item not in cart' });
    }

    const cart = await getCartForUser(req.user.userId);
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: 'Could not remove item from cart' });
  }
});

module.exports = router;
