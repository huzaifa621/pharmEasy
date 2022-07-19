const { Router } = require("express");
const { productController } = require("../controllers/product");

const productRouter = Router();

productRouter.get("/", productController);

module.exports = productRouter;
