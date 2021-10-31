/* let products = require("../../data"); */
const Product = require("../../models/Product");

const fetchProduct = async (productId, next) => {
  try {
    const product = await Product.findById(productId);
    return product;
  } catch (error) {
    next(error);
  }
};

const productFitch = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.json(products);
    console.log("get is working");
  } catch (error) {
    next(error);
  }
};

const productPost = async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
    console.log("post is working");
  } catch (error) {
    next(error);
  }
};
const productDelete = async (req, res, next) => {
  try {
    await req.product.remove();
    res.status(204).end();
    
  } catch (err) {
    next(error);
  }
};
  // delete before cleanup
  /* try {
    const productId = req.params.productId;
    console.log(productId);

    const foundProduct = await Product.findById(productId);

    console.log(foundProduct._id);

    if (foundProduct) {
      foundProduct.remove();
      res.status(204).end();
      console.log("Delete is working");
    } else {
      return res.status(404).json({ message: "this product doesn't exist" });
    }
  } catch (error) {
    next(error);
  } */
 


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
const productUpdate = async (req, res, next) => {
  try {
      await Product.findByIdAndUpdate(
      { _id: req.product._id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
// code before cleanup
/*  try {
    const productId = req.params.productId;
    const foundProduct = await Product.findById(productId);
    if (foundProduct) {
      const updatedProduct = await foundProduct.updateOne(req.body);
      res.status(204).json(updatedProduct);
      console.log("Update is working");
    } else {
      return res.status(404).json({ message: "this product doesn't exist" });
    }
  } catch (error) {
    next(error);
  }
}; */

module.exports = {
  productDelete,
  productFitch,
  productPost,
  productUpdate,
  fetchProduct,
};
