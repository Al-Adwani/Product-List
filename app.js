const express = require("express");
const connectDb = require("./database");
const productRoutes = require("./apis/products/router");
/* const data = require("./data"); */

const app = express();

app.use(express.json());
app.use(productRoutes);
connectDb();
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
