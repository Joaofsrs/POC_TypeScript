import moviesRepository from "../repositories/test.repository";
import { Movie } from "../protocols/movie.protocols";


async function createMovie(movie: Movie) {
  if (await movieAlreadyExists(movie.name)) {
    throw { message: "Filme ja existe" }
  }

  return await moviesRepository.createMovie(movie);
}

async function movieAlreadyExists(name: string) {
  const result = await moviesRepository.getMovieByName(name);
  return result.length > 0;
}

async function getMovie() {
  return await moviesRepository.getMovie();
}

async function editMovie(body: Movie, id: number) {
  if(Number.isNaN(id)){
    throw { message: "id de filme invalido" }
  }
  return await moviesRepository.editMovie(body, id);
}

async function deleteMovie(id: number) {
  const Movies = await moviesRepository.getMovieById(id);
  console.log(Movies);
  if(Number.isNaN(id) || Movies.length === 0){
    throw { message: "id de filme invalido" }
  }
  return await moviesRepository.deleteMovie(id);
}


const moviesService = {
  getMovie,
  createMovie,
  editMovie,
  deleteMovie
};

export default moviesService;