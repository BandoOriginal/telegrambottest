const express = require("express");
const PORT = process.env.PORT || 4040;
const { handler } = require("./controller")
//Iniciamos la aplicacion EXPRESS
const app = express();
app.use(express.json())
//Rutas de la API
app.post("*", async (req, res) => {
  console.log(req.body)
  console.log("Si se hizo POST")
  res.send("Hola")
  //res.send(await handler(req))
})
app.get("*", async (req, res) => {
  console.log(req.body)
  console.log("Si se hizo GET")
  res.send("Hola")
  //res.send(await handler(req))
})

//Abrimos Puertos
app.listen(PORT, function (err) {
  if(err) console.log(err);
  console.log("Server listening on PORT; ", PORT)
});