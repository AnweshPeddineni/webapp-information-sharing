const Event = require("../models/event");

exports.create = async (req, res) => {
  const { values, user } = req.body;
  const { title, content, date, start, end } = values;
  try {
    const newEvent = await new Event({
      title,
      content,
      date,
      start,
      end,
      user,
    }).save();
    res.json(newEvent);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.list = async (req, res) => {
  const { u_id } = req.params;
  console.log(u_id);
  try {
    console.log("trying to find");
    const events = await Event.find({ user: u_id })
      .sort({ createdAt: -1 })
      .exec();
    if (events) {
      console.log(events);
      res.json(events);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No events found");
  }
};

exports.getAll = async (req, res) => {
  try {
    console.log("trying to find");
    const events = await Event.find({}).sort({ createdAt: -1 }).exec();
    if (events) {
      console.log(events);
      res.json(events);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No events found");
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundEvents = await Event.find({ event: id }).exec();
  if (foundEvents && foundEvents.length > 0)
    res
      .status(400)
      .send("Cannot delete because active teams are available in this event");
  else {
    const removedEvent = await Event.findByIdAndDelete(id).exec();
    if (removedEvent) res.json(removedEvent);
    else res.status(400).send("Could not find the event, delete failed");
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id).exec();
  if (event) {
    res.json(event);
  } else {
    res.status(404).send("event not found");
  }
};

exports.update = async (req, res) => {
  console.log();
  const { id } = req.params;
  try {
    const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    if (updatedEvent) res.json(updatedEvent);
    else res.status(400).send("Event not found");
  } catch (error) {
    console.log(error);
    res.status(400).send("Event update failed");
  }
};
