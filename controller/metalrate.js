const MetalRate = require("../models/metalrate");

exports.createMetalRate = async (req, res) => {
  try {
    const { metal, purity, rate, ratedate } = req.body;
    if (!metal || !purity || !rate || !ratedate) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const rated = await MetalRate.create(req.body);
    res.status(201).json(rated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLatestMetalRate = async (req, res) => {
  try {
    const { metal, purity } = req.query;
    const latestRate = await MetalRate.findOne({ metal, purity }).sort({ ratedate: -1 });

    if (!latestRate) {
      return res.status(404).json({ error: "No rate found for the given metal and purity." });
    }

    res.status(200).json(latestRate);
  } catch (err) {
    console.error("Error fetching latest metal rate:", err); 
    res.status(400).json({ error: err.message });
  }
};


exports.getMetalRates = async (req, res) => {
  try {
    const { metal, purity, page, limit } = req.query;
    const pageNum = parseInt(page) || 1;
    const limitNum = parseInt(limit) || 10;

    const query = {};
    if (metal) query.metal = metal;
    if (purity) query.purity = purity;

    const rates = await MetalRate.find(query)
      .sort({ ratedate: -1 })
      .skip((pageNum - 1) * limitNum)
      .limit(limitNum);

    res.status(200).json(rates);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.getRateHistory = async (req, res) => {
 try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const rates = await MetalRate.find()
      .sort({ ratedate: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json(rates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

