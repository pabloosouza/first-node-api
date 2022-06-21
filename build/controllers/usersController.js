"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersCrontroller = void 0;
const database_1 = require("../database");
class UsersCrontroller {
    criarUsuario(request, response) {
        const { name } = request.body;
        if (name.length < 1) {
            return response.status(400).json({ mensagem: 'Não é possível criar um usuário sem nome' });
        }
        database_1.database.push(name);
        return response.status(201).json({ 'mensagem': `Usuário ${name} criado` });
    }
    listarUsuarios(request, response) {
        return response.status(200).json(database_1.database);
    }
}
exports.UsersCrontroller = UsersCrontroller;
