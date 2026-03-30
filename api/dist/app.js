import express from "express";
import cors from "cors";
const app = express();
const PORT = 8000;
app.use(cors({ origin: "http://localhost:5173" }));
app.get("/api/status", (req, res) => {
    res
        .status(200)
        .json({ message: "API is running!", uptime: process.uptime() });
});
app.get("/api/events", (req, res) => {
    res.status(200).json({
        data: [
            { id: 1, title: "We The Fest" },
            { id: 2, title: "Prambanan Jazz" },
            { id: 3, title: "Pestapora" },
        ],
    });
});
app.listen(PORT, () => {
    console.info(`Server is listening on port: ${PORT}`);
});
//# sourceMappingURL=app.js.map