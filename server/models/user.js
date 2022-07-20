const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    phone: { type: Number, required: true },
    otp: { type: [Number] },
  },
  {
    timestamps: true,
  }
);

const userModel = model("user", userSchema);

module.exports = userModel;
