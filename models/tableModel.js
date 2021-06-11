const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tableSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  domaines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Domaine"
    }
  ],
  processus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Processus"
    }
  ]
});

module.exports = {
    Table: mongoose.model("tables", tableSchema),
  };
