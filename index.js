import express from "express";
import cors from "cors";
import quoteRoutes from "./Router/quoteRoutes.js"

const app = express();

// configure CORS
app.use(cors({
    origin: [ "http://localhost:3000", "http://localhost:5000", "http://localhost:5173"],
    credentials: true,
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

app.use("/quotes", quoteRoutes);

const PORT = 3117;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})