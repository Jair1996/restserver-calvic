import { Schema, model } from 'mongoose';

const PedidoSchema = new Schema({
  fecha: {
    type: String,
    required: [true, 'La fecha es obligatoria'],
  },
  hora: {
    type: String,
    required: [true, 'La hora es obligatoria'],
  },
  products: {
    type: Array,
    required: [true, 'Las productos son obligatorios'],
  },
  tarjeta: {
    type: String,
    required: [true, 'La tarjeta es obligatoria'],
  },
});

export default model('Pedido', PedidoSchema);
