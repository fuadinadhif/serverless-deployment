import express from "express";

const app = express();
const PORT = 8000;

app.get("/api/status", (req, res) => {
  res
    .status(200)
    .json({ message: "API is running!", uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.info(`Server is listening on port: ${PORT}`);
});
