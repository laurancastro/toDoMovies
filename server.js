const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./router/api");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api", apiRoutes);
//declaracion de libreria, app que tiene lo que voy a exe y el puerto
app.get("/", (req, res) => {
  //se pueden poner valores en default en la desestructuración
  const { message = "Hello World!", format = "html" } = req.query;
  console.log("====================================");
  console.log(message, format);
  console.log("====================================");

  // res.send("<h1>Hello World!!</h1>")
  // quiero determinar mediante la variable format si debo responder en json o html, si el valor no está
  //definido o no se encuentra responder por default con html.
  // condicion ? se cumple : no se cumple
  /*   if (format == "json") {
    res.json({ message });
  }  else {
    res.send(`<h1>${message}</h1>`);
  } */

  format === "json" ? res.json({ message }) : res.send(`<h1>${message}</h1>`);
});
app.listen(port, () => {
  const user = { name: "nombre1", age: "18"};
  console.log(user);
  const body = { name: "nombre2", nickname: "Pepito"};
  const userUpdated = {...user, ...body}
  console.log(userUpdated);
  console.log(`Server running in ${port}`);
});

//agregar una nueva ruta para ver el show de users. root es users
//obtener un video especifico.
