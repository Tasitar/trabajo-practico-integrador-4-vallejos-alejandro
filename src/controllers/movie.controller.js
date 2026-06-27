import { Movie } from "../models/movie.model.js";

export const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    if (movies.length === 0)
      return res.status(200).json({ ok: true, msg: "Aun no hay peliculas registradas" });
    return res.status(200).json({ ok: true, msg: "Peliculas encontradas", movies });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const getOneMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie)
      return res.status(404).json({ ok: false, msg: "Pelicula no encontrada" });
    return res.status(200).json({ ok: true, movie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const createMovie = async (req, res) => {
  try {
    const { title, genre, duration, year, synopsis } = req.body;

    if (!title || !genre || duration === undefined || year === undefined)
      return res.status(400).json({ ok: false, msg: "title, genre, duration y year son obligatorios" });

    if (!Number.isInteger(duration) || duration <= 0)
      return res.status(400).json({ ok: false, msg: "duration debe ser un entero mayor a cero" });

    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(year) || year < 1888 || year > currentYear)
      return res.status(400).json({ ok: false, msg: `year debe ser un entero entre 1888 y ${currentYear}` });

    if (synopsis !== undefined && typeof synopsis !== "string")
      return res.status(400).json({ ok: false, msg: "synopsis debe ser una cadena de texto" });

    const existing = await Movie.findOne({ where: { title } });
    if (existing)
      return res.status(400).json({ ok: false, msg: "Ya existe una pelicula con ese titulo" });

    const newMovie = await Movie.create({ title, genre, duration, year, synopsis });
    return res.status(200).json({ ok: true, msg: "Pelicula creada correctamente", new_movie: newMovie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, genre, duration, year, synopsis } = req.body;

    const movie = await Movie.findByPk(id);
    if (!movie)
      return res.status(404).json({ ok: false, msg: "Pelicula no encontrada" });

    if (!title || !genre || duration === undefined || year === undefined)
      return res.status(400).json({ ok: false, msg: "title, genre, duration y year son obligatorios" });

    if (!Number.isInteger(duration) || duration <= 0)
      return res.status(400).json({ ok: false, msg: "duration debe ser un entero mayor a cero" });

    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(year) || year < 1888 || year > currentYear)
      return res.status(400).json({ ok: false, msg: `year debe ser un entero entre 1888 y ${currentYear}` });

    if (synopsis !== undefined && typeof synopsis !== "string")
      return res.status(400).json({ ok: false, msg: "synopsis debe ser una cadena de texto" });

    const existing = await Movie.findOne({ where: { title } });
    if (existing && existing.id !== movie.id)
      return res.status(400).json({ ok: false, msg: "Ya existe una pelicula con ese titulo" });

    await movie.update({ title, genre, duration, year, synopsis });
    return res.status(200).json({ ok: true, msg: "Pelicula actualizada correctamente", movie });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};

export const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if (!movie)
      return res.status(404).json({ ok: false, msg: "Pelicula no encontrada" });

    await movie.destroy();
    return res.status(200).json({ ok: true, msg: "Pelicula eliminada correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ ok: false, msg: "Error interno del servidor" });
  }
};