import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const routes = Router();

routes.post('/users', new CreateUserController().handle)
routes.post("/login", new AuthenticateUserController().handle)

routes.get('/courses', ensureAuthenticated, (request, response) => {
    return response.json([
        { id: 1, name: "NodeJS" },
        { id: 2, name: "ReactJS" },
        { id: 3, name: "React Native" },
        { id: 4, name: "Flutter" },
        { id: 5, name: "Elixir" },
    ]);
});

export { routes }