const express = require("express");
const router = express.Router();

const videoRoutes = require("./videos/index");
router.use("/videos", videoRoutes);

const userRoutes = require("./userRoutes");
router.use("/users", userRoutes);

const articleRoutes = require("./articleRoutes");
router.use("/articles", articleRoutes);

// crear articles, categories, profiles --> arreglo con objetos dummy
// crear index y show de cada recurso 
// crear post, delete y put de cada recurso y regresar rest.json({method: "metodo que lo llama"})
// crear colección para articles, categories, profiles, videos
// crear cada request hacia cada verbo http y guardar el endpoint
const categoryRoutes = 
module.exports = router;
