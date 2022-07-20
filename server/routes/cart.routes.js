const { Router } = require("express");
const { addCart } = require("../controllers/cart");

const cartRouter = Router();

//adding product into cart
//when user click on add button
cartRouter.post("/", addCart);

module.exports = cartRouter;
