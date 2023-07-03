import { Router } from "express";
import cors from "cors";
import { json } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import movieSchema from "../schemas/movie.schema";
import { createMovie, deleteMovie, editMovie, getMovie } from "../controllers/movie.controller";

const router = Router();
router.use(json());
router.use(cors());

router.post("/movie", validateSchema(movieSchema), createMovie);
router.get("/movie", getMovie);
router.patch("/movie/:id",  validateSchema(movieSchema), editMovie);
router.delete("/movie/:id", deleteMovie);


export default router;