const mongoose = require("mongoose");

const AddPromptSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    descrption: {
      type: String,
      require: true,
    },
    imageUrl: {
      type: String,
    },
    promtType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("AddPromptSchema", AddPromptSchema);
