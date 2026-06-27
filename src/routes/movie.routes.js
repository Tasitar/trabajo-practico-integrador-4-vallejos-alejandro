import { Router } from "express";
import { createMovie, getMovies } from "../controllers/movie.controller.js";

export const movieRouter = Router()
movieRouter.get('/movie', getMovies)
movieRouter.post('/movie', createMovie)