const express = require("express");
const app = express();
const port = process.env.PORT || 4040;
app.use(express.json());
app.post("*", async (req, res) => {
  res.send("Hello Post")
});
app.get("*", async (req, res) => {
  res.send("Hello Get")
})

app.listen(PORT, function (err) {
  if(err) console.log(err);
  console.log("Server listening on PORT; ", PORT)
})