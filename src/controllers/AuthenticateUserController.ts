import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


export class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const service = new AuthenticateUserService();

        const token = await service.execute({ username, password });

        if (token instanceof Error) {
            return response.status(400).json(token.message)
        }

        return response.json(token);

    }
}