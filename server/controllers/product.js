const productModel = require("../models/product");

const productController = async (req, res) => {
  const q = req.query.q;
  try {
    if (q) {
      const data = await productModel.find({ ancestor: { $in: [q] } });
      return res.send(data);
    }
    const data = await productModel.find();
    return res.send(data);
  } catch (err) {
    return res.status(404).send(err.message);
  }
};

module.exports = { productController };
