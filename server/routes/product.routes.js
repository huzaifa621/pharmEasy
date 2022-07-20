const { Router } = require("express");
const {
  productPost,
  productGet,
  productGetSearch,
  singleProduct,
} = require("../controllers/product");

const productRouter = Router();

productRouter.get("/", productGet);
productRouter.get("/search", productGetSearch);
productRouter.post("/", productPost);
productRouter.get("/single/:id", singleProduct);

module.exports = productRouter;
