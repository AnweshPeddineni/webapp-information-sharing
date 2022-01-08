const Stock = require("../models/stock");

exports.create = async (req, res) => {
  const { values, user } = req.body;
  const {
    stock_name,

    avg_buy,
    nasdaq,
    current_price,
    track,
    allocation,
    entry_status,
    last_buy_date,
    country,
  } = values;
  try {
    const newStock = await new Stock({
      stock_name,
      avg_buy,
      nasdaq,
      current_price,
      track,
      user,
      allocation,
      country,
      entry_status,
      last_buy_date,
    }).save();
    res.json(newStock);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.list = async (req, res) => {
  const { u_id } = req.params;
  console.log(u_id);
  try {
    console.log("trying to find");
    const stocks = await Stock.find({ user: u_id })
      .sort({ allocation: -1 })
      .exec();
    if (stocks) {
      console.log(stocks);
      res.json(stocks);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No stocks found");
  }
};

exports.getAll = async (req, res) => {
  try {
    console.log("trying to find");
    const stocks = await Stock.find({}).sort({ allocation: 1 }).exec();
    if (stocks) {
      console.log(stocks);
      res.json(stocks);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No stocks found");
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundStocks = await Stock.find({ stock: id }).exec();
  if (foundStocks && foundStocks.length > 0)
    res
      .status(400)
      .send("Cannot delete because active teams are available in this stock");
  else {
    const removedStock = await Stock.findByIdAndDelete(id).exec();
    if (removedStock) res.json(removedStock);
    else res.status(400).send("Could not find the stock, delete failed");
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  const stock = await Stock.findById(id).exec();
  if (stock) {
    res.json(stock);
  } else {
    res.status(404).send("Stock not found");
  }
};

exports.update = async (req, res) => {
  console.log();
  const { id } = req.params;
  try {
    const updatedStock = await Stock.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    if (updatedStock) res.json(updatedStock);
    else res.status(400).send("Stock not found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Stock update failed");
  }
};
