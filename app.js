const express = require("express");
const PORT = process.env.PORT || 4040;
//Iniciamos la aplicacion EXPRESS
const app = express();

//Rutas de la API
app.post("*", (req, res) => {
  console.log(req.body)
  console.log("Si se hizo POST")
  res.send("Hello Post")
})
app.get("*", (req, res) => {
  console.log(req.body)
  console.log("Si se hizo GET")
  res.send("Hello GET")
})

//Abrimos Puertos
app.listen(PORT, function (err) {
  if(err) console.log(err);
  console.log("Server listening on PORT; ", PORT)
});