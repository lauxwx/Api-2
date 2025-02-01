const express = require("express");
const cors = require("cors");
require('dotenv').config();
const conect = require('./config/bd.js');
const recetaRoutes = require('./routes/receta.routes.js'); 
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
conect.conectDB();
app.use('/', recetaRoutes);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
