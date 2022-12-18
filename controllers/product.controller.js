import Product from '../models/product.model.js';

const productGet = async (req, res) => {
  const products = await Product.find();

  res.status(200).json(products);
};

const producFeaturedGet = async (req, res) => {
  const products = await Product.find({ featureProduct: true });

  res.status(200).json(products);
};

const productGetById = async (req, res) => {
  const { id } = req.params;

  const product = await Product.findById(id);

  res.status(200).json(product);
};

export { productGet, producFeaturedGet, productGetById };
