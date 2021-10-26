/* let products = require("../../data"); */
const Product = require("../../models/Product");

const productFitch = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log("get is working");
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
