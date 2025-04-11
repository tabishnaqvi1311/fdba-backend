import express from "express";
import cors from "cors";

const port = process.env.PORT || 8000;
const SERVER_ORIGIN = process.env.SERVER_ORIGIN;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${SERVER_ORIGIN}:${port}`);
});
