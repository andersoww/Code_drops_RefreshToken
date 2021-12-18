import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { hash } from 'bcryptjs';

interface IUserRequest {
    name: string;
    username: string;
    password: string;
}

export class CreateUserService {
    async execute({ name, username, password }: IUserRequest) {

        //Verificar se o usuário existe
        const repo = getRepository(User);

        if (await repo.findOne({ username })) {
            return Error("User already exists!")
        }
        //Cadsatrar o usuário

        const passwordHash = await hash(password, 8)

        const user = repo.create({
            name, username, password: passwordHash,
        })
        await repo.save(user);

        return user
    }
}