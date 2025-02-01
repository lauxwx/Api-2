const express = require("express");
const {
  getRecetas,
  postRecetas,
  getRecetaXId,
  patchReceta,
  inactivarReceta,
  deleteReceta,
  getRecetaNombre
} = require("../controllers/receta.controller.js");

const router = express.Router();

router.get("/recetas", getRecetas);
router.post("/recetas", postRecetas);
router.get("/recetas/:id", getRecetaXId);
router.get("/buscar/:nombre", getRecetaNombre);
router.patch("/recetas/:id", patchReceta);
router.patch("/recetas/:id/inactivar", inactivarReceta);
router.delete("/recetas/:id", deleteReceta);

module.exports = router;
