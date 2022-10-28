import express from "express";
import cors from "cors";
import reataurants from "./api/reataurants.route.js";

const app = express();

app.use(cors());
app.use.apply(express.json);

app.use("/api/v1/restaurants", restaurants);
app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
