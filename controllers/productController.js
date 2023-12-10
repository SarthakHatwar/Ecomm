const Product = require('../models/productModel');

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({ name, quantity });
    await product.save();
    res.json({ data: { product } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ data: { products } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ data: { message: 'Product deleted' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateQuantity = async (req, res) => {
  try {
    const { number } = req.query;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { $inc: { quantity: Number(number) } },
      { new: true }
    );
    res.json({ data: { product, message: 'Updated successfully' } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
