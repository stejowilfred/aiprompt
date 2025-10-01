const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./utils/ConnectDB");
const PromtRoute = require("./Routes/PromtRoute");

dotenv.config();

const app = express();
app.use(express.json());

// Middleware logger
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});
app.use("/v1/promt", PromtRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.stack);
  res.status(500).json({ error: err.message });
});

// Start server only after DB connection
const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
}).catch((err) => {
  console.error("Server not started because DB failed");
});
