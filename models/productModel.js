const mongoose = require('mongoose');
// Define a Mongoose Schema for the Product model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

module.exports = mongoose.model('Product', productSchema);
