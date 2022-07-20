const { Router } = require("express");
const { productPost, productGet } = require("../controllers/product");

const productRouter = Router();

productRouter.get("/", productGet);
productRouter.post("/", productPost);

module.exports = productRouter;
