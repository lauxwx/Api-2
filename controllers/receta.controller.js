const Receta = require('../models/receta.model.js');

const getRecetas = async (req, res) => {
  try {
    const recetas = await Receta.find();
    res.json(recetas);
  } catch (error) {
    res.status(500).json({ error: error.mensaje });
  }
};

const postRecetas = async (req, res) => {
  try {
    const newReceta = new Receta(req.body);
    const savedReceta = await newReceta.save();
    res.status(201).json(savedReceta);
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};

const getRecetaXId = async (req, res) => {
  try {
    const receta = await Receta.findById(req.params.id);
    if (!receta) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json(receta);
  } catch (error) {
    res.status(500).json({ error: error.mensaje });
  }
};

const getRecetaNombre = async (req, res) => {
  try {
    const nombre = req.params.nombre; 
    const recetas = await Receta.find({ nombre: { $regex: nombre, $options: "i" } }); 

    if (!recetas || recetas.length === 0) {
      return res.status(404).json({ mensaje: "No se encontraron recetas con ese nombre" });
    }

    res.json(recetas); 
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



const patchReceta = async (req, res) => {
  try {
    const recetaActualizada = await Receta.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!recetaActualizada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json(recetaActualizada);
  } catch (error) {
    res.status(400).json({ error: error.mensaje });
  }
};

const inactivarReceta = async (req, res) => {
  try {
    const recetaInactiva = await Receta.findByIdAndUpdate(
      req.params.id,
      { estado: "Inactiva" },
      { new: true }
    );
    if (!recetaInactiva) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json({ mensaje: "Receta inactivada", receta: recetaInactiva });
  } catch (error) {
    res.status(500).json({ error: error.mensaje });
  }
};

const deleteReceta = async (req, res) => {
  try {
    const recetaEliminada = await Receta.findByIdAndDelete(req.params.id);
    if (!recetaEliminada) {
      return res.status(404).json({ mensaje: "Receta no encontrada" });
    }
    res.json({
      mensaje: "Receta eliminada de manera corecta",
      receta: recetaEliminada,
    });
  } catch (error) {
    res.status(500).json({ error: error.mensaje });
  }
};

module.exports = {
  getRecetas,
  postRecetas,
  getRecetaXId,
  patchReceta,
  inactivarReceta,
  deleteReceta,
  getRecetaNombre
};
