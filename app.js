const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public"));

app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data;
    res.render("index", { products });
  } catch (err) {
    console.error("Erro al consumir API: ", err.message);
    res.status(500).send("Errro al obtener productos");
  }
});

app.listen(port, () => {
  console.log(`Servidor carriendo en http://localhost:${port}`);
});
