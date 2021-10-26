const express = require("express");
const router = express.Router();
/* let products = require("../../data"); */
const { productDelete, productFitch, productPost } = require("./controllers");
router.get("/api/products", productFitch);

router.post("/api/products", productPost);

router.delete("/api/products/:productId", productDelete);
module.exports = router;
