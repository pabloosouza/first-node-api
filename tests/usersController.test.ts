import { Request } from 'express'
import { UsersCrontroller } from "../src/controllers/usersController"
import { makeMockResponse } from './mocks/mockResponse';

describe('Users Controller', () => {
    const usersController = new UsersCrontroller();

    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse()
    it('Deve listar os usuários', () => {
        usersController.listarUsuarios(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(3)
    })

    it('Deve criar um novo usuário', () => {
        mockRequest.body = {
            name: 'Novo usuário'
        }

        usersController.criarUsuario(mockRequest, mockResponse);
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({ 'mensagem': `Usuário Novo usuário criado` })
    })

    it('Não deve criar usuário com nome vazio', () => {
        mockRequest.body = {
            name: ''
        }

        usersController.criarUsuario(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(400)
        expect(mockResponse.state.json).toMatchObject({ mensagem: 'Não é possível criar um usuário sem nome' })
    });
})