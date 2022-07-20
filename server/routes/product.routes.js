const { Router } = require("express");
const {
  productPost,
  productGet,
  productGetSearch,
} = require("../controllers/product");

const productRouter = Router();

productRouter.get("/", productGet);
productRouter.get("/search", productGetSearch);
productRouter.post("/", productPost);

module.exports = productRouter;
