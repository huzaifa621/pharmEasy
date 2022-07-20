const cartObjectModel = require("../models/cartObject");
const cartModel = require("../models/cart");

const addCart = async (req, res) => {
  const { productId, qty, user_id } = req.body;
  try {
    if (qty && productId && user_id) {
      const isProduct = await cartObjectModel.findOne({
        product: productId,
        user_id: user_id,
      });
      if (isProduct) {
        const updateProductQty = await cartObjectModel.updateOne(
          { product: productId, user_id: user_id },
          { $set: { qty: isProduct.qty + 1 } }
        );
        const oldCartUser = await cartModel.findOne({ user_id: user_id });
        if (oldCartUser) {
          const updateCartUser = await cartModel.updateOne(
            { user_id: user_id },
            { $push: { cartProduct: isProduct._id } }
          );
          return res.send("product successfully added into cart");
        }
        return res.send("product already added into cart");
      }

      const newProduct = new cartObjectModel({
        user_id: user_id,
        product: productId,
        qty: qty,
      });
      await newProduct.save();

      const oldCartUser = await cartModel.findOne({ user_id: user_id });
      if (oldCartUser) {
        const updateCartUser = await cartModel.updateOne(
          { user_id: user_id },
          { $push: { cartProduct: newProduct._id } }
        );
        return res.send("product successfully added into cart");
      }

      const newCartUser = new cartModel({
        user_id: user_id,
        cartProduct: [newProduct._id],
      });
      await newCartUser.save();
      return res.send("New product successfully added into cart");
    }
  } catch (err) {
    return res.status(403).send("Something went wrong");
  }
};

module.exports = { addCart };
