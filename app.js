const express = require("express");
let products = require("./data");
/* const data = require("./data"); */

const app = express();

app.use(express.json());

app.post("/api/products", (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
  console.log("post is working");
});

app.delete("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  console.log(productId);
  const foundProduct = products.find((product) => product.id === +productId);
  console.log(foundProduct);
  if (foundProduct) {
    products = products.filter((product) => product.id !== +productId);
    console.log(products);
    res.status(204);
    return res.end();
  } else {
    return res.status(404).json({ message: "Not Foound" });
  }
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});

app.get("/api/products", (req, res) => {
  res.json(products);
  console.log("get is working");
});
