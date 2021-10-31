const express = require("express");
const router = express.Router();
/* let products = require("../../data"); */
const {
  productDelete,
  productFitch,
  productPost,
  productUpdate,
  fetchProduct,
} = require("./controllers");

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    next({ status: 404, message: "Product Not Found!" });
  }
});

router.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.hostname}:8000${req.originalUrl}`
  );

  next();
});

router.get("/api/products", productFitch);

router.post("/api/products", productPost);

router.put("/api/products/:productId", productUpdate);

router.delete("/api/products/:productId", productDelete);
module.exports = router;
