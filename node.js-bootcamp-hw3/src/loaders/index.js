const { connectDB } = require("./mongoose");

module.exports = () => {
  connectDB();
};