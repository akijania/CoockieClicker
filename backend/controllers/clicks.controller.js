const Click = require("../models/click.model");

exports.getClicksCount = async (req, res) => {
  try {
    res.send(await Click.find());
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.patch = async (req, res) => {
  const { clicksNumber } = req.body;

  try {
    const filter = {};
    const update = { click_count: clicksNumber };

    await Click.findOneAndUpdate(filter, update, {
      new: true
    });
    res.json({ message: "OK" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
