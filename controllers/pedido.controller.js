import Product from '../models/product.model.js';
import Pedido from '../models/pedido.model.js';

const pedidoPost = async (req, res) => {
  const { fecha, hora, products, tarjeta } = req.body;

  products.forEach(async (product) => {
    const { _id, quantity } = product;

    const productFound = await Product.findById(_id);

    await Product.findByIdAndUpdate(_id, { qty: productFound.qty - quantity });
  });

  const pedido = new Pedido({ fecha, hora, products, tarjeta });

  await pedido.save();

  res.status(201).json(pedido);
};

const pedidoGet = async (req, res) => {
  const pedidos = await Pedido.find();

  return res.status(200).json(pedidos);
};

export { pedidoPost, pedidoGet };
