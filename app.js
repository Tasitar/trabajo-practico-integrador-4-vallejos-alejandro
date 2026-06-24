import express from "express";
import { starBD } from "./src/config/database.js";
starBD
const app = express();

const PORT = 3000;

app.use(express.json())

app.listen(PORT, async () => {
    await starBD();
    console.log(`servidor prendido http://localhost:${PORT}`);
})