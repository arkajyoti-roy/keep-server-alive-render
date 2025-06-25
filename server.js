const express = require("express");
const https = require("https");

const app = express();
const PORT = 3000; // You can change this if needed

// Basic ping route
app.get("/", (req, res) => {
  res.send("✅ Server is running and will keep Render alive.");
});

// Native ping function using https module
function pingRender() {
  const url = "https://expense-server-neoq.onrender.com/status";
  
  https.get(url, (res) => {
    console.log(`[${new Date().toLocaleTimeString()}] Pinged Render: ${res.statusCode}`);
  }).on("error", (err) => {
    console.error(`[${new Date().toLocaleTimeString()}] Ping failed: ${err.message}`);
  });
}

// Use setInterval for periodic pinging (every 1 minute)
setInterval(pingRender, 60_000); // 60000ms = 1 min

// Start local Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  pingRender(); // Optional: Ping once on startup
});
