const mongoose = require("mongoose");
const { Schema } = mongoose;

const SessionSchema = new Schema({
  
});

module.exports = mongoose.model.Sessions || mongoose.model("Session", SessionSchema);