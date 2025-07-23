const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo-product:27017/products');

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String
});
const Product = mongoose.model('Product', ProductSchema);

app.get('/products', async (req, res) => {
  res.json(await Product.find());
});

app.post('/products', async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
});

app.listen(3002, () => console.log('Product service running on port 3002'));
