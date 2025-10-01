const AddPromt = require("../model/AddPromt");

exports.createPromt = async (req, res) => {
  try {
    const { title, descrption, imageUrl,promtType } = req.body;
    const newPromt = await AddPromt.create({ title, descrption, imageUrl,promtType });
    res.status(201).json({
      statusCode: 201,
      message: "Created Promt Success",
      results: newPromt,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      message: err.message,
    });
  }
};

exports.listPromt = async (req, res) => {
  try {
    const promtType = req.query.type;
    const allPromt = await AddPromt?.find({});

    let filterData = [...allPromt]; // use let since you may reassign

    if (promtType) {
      filterData = filterData?.filter(item => item?.promtType?.toLowerCase() === promtType?.toLowerCase());
    }

    res.status(200).json({
      statusCode: 200,
      message: "List Promt fetch success",
      results: filterData,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "Internal server error",
      error: err.message, // avoid duplicate keys
    });
  }
};


exports.getPromtById = async (req, res) => {
  try {
    const promt = await AddPromt.findById(req.params.id);

    if (!promt) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      statusCode: 201,
      message: "Promt fetch Success",
      results: promt,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      message: err.message,
    });
  }
};

exports.updatePromt = async (req, res) => {
  try {
    const updatedPromt = await AddPromt.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedPromt)
      return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      statusCode: 201,
      message: "Update Promt  Success",
      results: updatedPromt,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      message: err.message,
    });
  }
};

exports.deletePromt = async (req, res) => {
  try {
    const deleted = await AddPromt.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "User not found" });
    res.status(200).json({
      statusCode: 201,
      message: "Promt Deleted",
      results: deleted,
    });
  } catch (err) {
    res.status(500).json({
      statusCode: 500,
      message: "internal server error",
      message: err.message,
    });
  }
};

