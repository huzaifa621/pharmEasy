const { Router } = require("express");
const { addCart, getCart, moveToOrder } = require("../controllers/cart");

const cartRouter = Router();

//adding product into cart
//when user click on add button
cartRouter.post("/", addCart);

//when user want cart Data  ||  :id--> user id
cartRouter.get("/:id", getCart);

//when user make a payment all cart will go in order data , with user_id
cartRouter.get("/payment/:id", moveToOrder);

module.exports = cartRouter;
