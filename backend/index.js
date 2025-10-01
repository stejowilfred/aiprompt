const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PromtRoute = require('./Routes/PromtRoute');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Log requests
app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Hello world!" });
});

app.use('/v1/prompt', PromtRoute);

// Connect to DB, then start server
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log(' Database connected');
  app.listen(PORT, () => {
    console.log(` Server listening on port ${PORT}`);
  });
})
.catch((err) => {
  console.error(' Database connection failed:', err.message);
  process.exit(1); // stop the server if DB fails
});
