import User from '../models/user';
import { save, getById, update, getAutoSuggestUsers, getAll, remove } from '../repository/userRepository';
import { v4 as uuidv4 } from 'uuid';

export const saveUser = (request, response) => {
    const id = uuidv4();
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = false;
    const user = new User(id, login, password, age, isDeleted);
    save(user);
    response.status(201).send(user);
};

export const getUser = (request, response) => {
    const id = request.params.id;
    const user = getById(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

export const updateUser = (request, response) => {
    const id = request.params.id;
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = request.body.isDeleted;
    let user = new User(id, login, password, age, isDeleted);
    user = update(user);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

export const getUsers = (request, response) => {
    const loginSubstring = String(request.body.loginSubstring);
    const limit = parseInt(request.body.limit, 10);
    if (loginSubstring && limit && limit >= 0) {
        response.send(getAutoSuggestUsers(loginSubstring, limit));
    } else {
        response.send(getAll());
    }
};

export const removeUser = (request, response) => {
    const id = request.params.id;
    const user = remove(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};
