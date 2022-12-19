import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
  brand: {
    type: String,
    required: [true, 'La marca es obligatoria'],
  },
  category: {
    type: String,
    required: [true, 'La categoria es obligatoria'],
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
  },
  featureProduct: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array,
    required: [true, 'Las imágenes son obligatorias'],
  },
  model: {
    type: String,
    required: [true, 'El modelo es obligatorio'],
  },
  price: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
  },
  qty: {
    type: Number,
  },
  sizes: {
    type: Array,
    required: [true, 'Los tallas son obligatorias'],
  },
  sku: {
    type: String,
    required: [true, 'El sku es obligatorio'],
  },
  specifications: {
    type: Array,
    required: [true, 'Las especificaciones son obligatorias'],
  },
  subcategory: {
    type: String,
    required: [true, 'La subcategorías es obligatoria'],
  },
});

export default model('Product', ProductSchema);
