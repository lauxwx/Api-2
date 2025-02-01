const mongoose = require("mongoose");

const recetaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  ingredientes: {
    type: String,
    required: true,
  },
  instrucciones: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    default: "Activa",
  },
  categoria: { 
    type: String, 
    default: "Plato fuerte" 
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  ImageUrl: {
    type: String,
    required: false,
    default: '',
  },
  
});

const Receta = mongoose.model("Receta", recetaSchema);

module.exports = Receta;
