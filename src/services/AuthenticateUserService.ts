import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'


interface IRequest {
    username: string;
    password: string;
}

export class AuthenticateUserService {
    async execute({ username, password }: IRequest) {
        const repo = getRepository(User);
        //Verificar se usuário Existe
        const userAlredyExists = await repo.findOne({ username })
        if (!userAlredyExists) {
            return Error("User or password incorrect")
        }
        //Verificar se a senha está correta!
        const passwordMatch = await compare(password, userAlredyExists.password)

        if (!passwordMatch) {
            return Error("User or password incorrect!")
        }

        // Gerar token do usuário

        const token = sign({}, 'andersoww', {
            subject: userAlredyExists.id,
            expiresIn: "30s"
        });
        return { token };
    }

}