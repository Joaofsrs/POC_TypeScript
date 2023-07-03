import express, { json } from "express";
import router from "./routers/movie.router";

const server = express();
server.use(json())
server.use(router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server initiated on ${PORT}`));