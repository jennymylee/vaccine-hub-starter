const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { PORT } = require("./config");
const authRoutes = require("./routes/auth");

const { BadRequestError, NotFoundError } = require("./utils/errors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.use("/auth", authRoutes);

app.use((req, res, next) => {
  return next(new NotFoundError());
});

app.use((error, req, res, next) => {
  let status = error.status || 500;
  let message = error.message || "Something went wrong in the application";
  return res.status(status).json({ error: { status, message } });
});

app.listen(PORT, () => {
  console.log(`Server running https://localhost:${PORT}`);
});
