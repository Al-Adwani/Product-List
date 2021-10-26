let products = require("../../data");

const productFitch = (req, res) => {
  res.json(products);
  console.log("get is working");
};

const productPost = (req, res) => {
  products.push(req.body);
  res.status(201).json(req.body);
  console.log("post is working");
};
const productDelete = (req, res) => {
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
};

module.exports = { productDelete, productFitch, productPost };
