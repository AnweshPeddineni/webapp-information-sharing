const Transaction = require("../models/transaction");

exports.create = async (req, res) => {
  const { values, user } = req.body;
  const {
    stock_name,
    avg_buy,
    current_price,
    track,
    allocation,
    last_buy_date,
    country,
    status,
  } = values;
  try {
    const newTransaction = await new Transaction({
      stock_name,
      avg_buy,
      current_price,
      track,
      user,
      allocation,
      country,
      last_buy_date,
      status,
    }).save();
    res.json(newTransaction);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.list = async (req, res) => {
  const { u_id } = req.params;
  console.log(u_id);
  try {
    console.log("trying to find");
    const transaction = await Transaction.find({ user: u_id })
      .sort({ createdAt: -1 })
      .exec();
    if (transaction) {
      console.log(transaction);
      res.json(transaction);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No Transactions found");
  }
};

exports.getAll = async (req, res) => {
  try {
    console.log("trying to find");
    const transaction = await Transaction.find({})
      .sort({ createdAt: -1 })
      .exec();
    if (transaction) {
      console.log(transaction);
      res.json(transaction);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No Transactions found");
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundTransactions = await Transaction.find({ tansaction: id }).exec();
  if (foundTransactions && foundTransactions.length > 0)
    res
      .status(400)
      .send(
        "Cannot delete because active teams are available in this Transaction"
      );
  else {
    const removedTransaction = await Transaction.findByIdAndDelete(id).exec();
    if (removedTransaction) res.json(removedTransaction);
    else res.status(400).send("Could not find the Transaction, delete failed");
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  const transaction = await Transaction.findById(id).exec();
  if (transaction) {
    res.json(transaction);
  } else {
    res.status(404).send("Transaction not found");
  }
};

exports.update = async (req, res) => {
  console.log();
  const { id } = req.params;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    ).exec();
    if (updatedTransaction) res.json(updatedTransaction);
    else res.status(400).send("Transaction not found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Transaction update failed");
  }
};
