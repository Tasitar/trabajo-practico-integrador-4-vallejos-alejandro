import { Router } from "express";
import { getMovies, getOneMovie, createMovie, updateMovie, deleteMovie } from "../controllers/movie.controller.js";

export const movieRouter = Router();

movieRouter.get("/movies", getMovies);
movieRouter.get("/movies/:id", getOneMovie);
movieRouter.post("/movies", createMovie);
movieRouter.put("/movies/:id", updateMovie);
movieRouter.delete("/movies/:id", deleteMovie);