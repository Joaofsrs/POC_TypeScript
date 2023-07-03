import { Movie } from "../protocols/movie.protocols";
import { Request, Response } from "express";
import httpStatus from "http-status";
import moviesService from "../service/test.service";

export async function createMovie(req: Request, res: Response){
    const body = req.body as Movie;
    try{
        await moviesService.createMovie(body)
        res.send("Filme adicionado com sucesso!").status(httpStatus.CREATED)
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function getMovie(req: Request, res: Response){
    try{
        const result = await moviesService.getMovie();
        res.send(result).status(httpStatus.OK)
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function editMovie(req: Request, res: Response){
    const body = req.body as Movie;
    const id = Number(req.params.id) as number;
    try{
        await moviesService.editMovie(body, id);
        res.send("Filme editado com sucesso").status(httpStatus.OK)
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.CONFLICT);
    }
}

export async function deleteMovie(req: Request, res: Response){
    const id = Number(req.params.id) as number;
    try{
        await moviesService.deleteMovie(id);
        res.send("Filme deletado com sucesso").status(httpStatus.OK)
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.CONFLICT);
    }
}
