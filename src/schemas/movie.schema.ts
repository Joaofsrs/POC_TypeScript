import Joi from "joi";
import { Movie } from "../protocols/movie.protocols";

const movieSchema = Joi.object<Movie>({
  type: Joi.string().required(),
  name: Joi.string().required(),
  platform: Joi.string().required()
})

export default movieSchema;