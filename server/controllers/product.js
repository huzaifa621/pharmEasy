const productModel = require("../models/product");

const productGet = async (req, res) => {
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

const productPost = async (req, res) => {
  const { data } = req.body;
  const insertMany = new productModel.insertMany([...data]);
  await insertMany.save();
  return res.send("Data added");
};

module.exports = { productGet, productPost };
