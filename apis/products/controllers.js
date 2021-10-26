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

const productPost = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    console.log("post is working");
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const productDelete = async (req, res) => {
  try {
    const productId = req.params.productId;
    console.log(productId);

    const foundProduct = await Product.findById(productId);

    console.log(foundProduct._id);

    if (foundProduct) {
      foundProduct.remove();
      res.status(204).end();
      console.log("Inside if");
    } else {
      return res.status(404).json({ message: "this product doesn't exist" });
    }
  } catch (error) {
    res.status(404).json({ message: error });
  }
  /*  const productId = req.params.productId;
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
  } */
};

module.exports = { productDelete, productFitch, productPost };
