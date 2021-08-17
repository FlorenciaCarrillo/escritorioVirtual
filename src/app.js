const express = require("express");
const app = express();

app.use(require("./controllers/homeController")); //le digo a express que voy a usar el controlador homeController
app.use(require("./controllers/tareasController"));


app.listen(3000,console.log("Escuchando en el puerto 3000"));
