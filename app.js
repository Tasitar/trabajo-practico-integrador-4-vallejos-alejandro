import express from "express";
import { starBD } from "./src/config/database.js";
import { movieRouter } from "./src/routes/movie.routes.js";


starBD
const app = express();

const PORT = 3000;

app.use(express.json())

app.use('/api', movieRouter)
app.listen(PORT, async () => {
    await starBD();
    console.log(`servidor prendido http://localhost:${PORT}`);
})