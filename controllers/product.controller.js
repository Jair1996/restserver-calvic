import Product from '../models/product.model.js';

const productGet = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

const producFeaturedGet = async (req, res) => {
  const products = await Product.find({ featureProduct: true });

  res.status(200).json(products);
};

export { productGet, producFeaturedGet };
