const { Schema, model } = require("mongoose");
const userModel = require("./user");
const cartObjectModel = require("./cartObject");
const cartSchema = new Schema(
  {
    user_id: { type: Schema.Types.ObjectId, ref: userModel },
    cartProduct: [{ type: Schema.Types.ObjectId, ref: cartObjectModel }],
  },
  {
    timestamps: true,
  }
);

const cartModel = model("cart", cartSchema);

module.exports = cartModel;
