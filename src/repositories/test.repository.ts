import { Movie } from "../protocols/movie.protocols";
import { connection } from "../database/database";

async function getMovie() {
  const result = await connection.query<Movie>(
    `SELECT * FROM movie`
  )
  console.log(result.rows);
  return result.rows;
}

async function createMovie(user: Movie) {
  return await connection.query<Movie>(`
  INSERT INTO movie (type, name, platform) VALUES ($1, $2, $3)`,
  [user.type, user.name, user.platform]);
}

async function getMovieByName(name: string) {
  const result = await connection.query<Movie>(
    `SELECT * FROM movie WHERE name = $1`,
    [name]
  )

  return result.rows;
}

async function getMovieById(id: number) {
  const result = await connection.query<Movie>(
    `SELECT * FROM movie WHERE id = $1`,
    [id]
  )

  return result.rows;
}

async function editMovie(user: Movie, id: number) {
  return await connection.query<Movie>(`
  UPDATE movie SET type = $1, name = $2, platform = $3 WHERE id = $4;`,
  [user.type, user.name, user.platform, id]);
}

async function deleteMovie(id: number) {
  return await connection.query<Movie>(
    `DELETE FROM movie WHERE id = $1`,
    [id]
  )
}

const moviesRepository = {
  getMovie,
  createMovie,
  getMovieByName,
  getMovieById,
  editMovie,
  deleteMovie
}

export default moviesRepository;