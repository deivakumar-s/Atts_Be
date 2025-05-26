const Purity = require("../models/purity");

exports.createPurity = async (req, res) => {
  try {
    const { metal, purityName, description } = req.body;
    if (!metal || !purityName || !description) {
      return res.status(400).json({ error: "metal, purityName, and description fields are required" });
    }

    const purity = await Purity.create(req.body);
    res.status(201).json(purity);
  } catch (err) {
    console.error("Error creating purity:", err); 
    res.status(400).json({ error: err.message });
  }
};


exports.getAllPurities = async (req, res) => {
  try {
    const purities = await Purity.find();
    res.status(200).json(purities);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updatePurity = async (req, res) => {
  try {
    const updated = await Purity.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletePurity = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Purity.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).json({ error: "Purity not found" });
    }
    res.status(200).json({ message: "Purity deleted successfully" });
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ error: "Failed to delete purity" });
  }
};
exports.getPuritiesByMetal = async (req, res) => {
  try {
    const { metal } = req.query;
    if (!metal) {
      return res.status(400).json({ error: "Metal query parameter is required" });
    }

    const purities = await Purity.find({ metal: { $regex: new RegExp(`^${metal}$`, 'i') } });
    res.status(200).json(purities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

