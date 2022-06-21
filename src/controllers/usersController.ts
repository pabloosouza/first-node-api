import { Request, Response } from 'express'
import { database } from "../database"

export class UsersCrontroller {
    criarUsuario(request: Request, response: Response): Response {
        const { name } = request.body

        if (name.length < 1) {
            return response.status(400).json({ mensagem: 'Não é possível criar um usuário sem nome' })
        }

        database.push(name)
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` })
    }

    listarUsuarios(request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}
