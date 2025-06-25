const fetch = require("node-fetch");

module.exports = async function (req, res) {
  try {
    const response = await fetch("https://expense-server-neoq.onrender.com/status");
    res.status(200).json({
      message: "Ping successful",
      status: response.status,
      time: new Date().toLocaleTimeString()
    });
  } catch (error) {
    res.status(500).json({
      message: "Ping failed",
      error: error.message
    });
  }
};
