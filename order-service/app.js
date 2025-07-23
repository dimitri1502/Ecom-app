const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo-order:27017/orders');

const OrderSchema = new mongoose.Schema({
  userId: String,
  products: [String],
  createdAt: { type: Date, default: Date.now }
});
const Order = mongoose.model('Order', OrderSchema);

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Missing token' });
  try {
    const decoded = jwt.verify(token, 'secret');
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

app.post('/orders', authenticate, async (req, res) => {
  const order = await Order.create({ ...req.body, userId: req.user.id });
  res.json(order);
});

app.get('/orders', authenticate, async (req, res) => {
  res.json(await Order.find({ userId: req.user.id }));
});

app.listen(3003, () => console.log('Order service running on port 3003'));
