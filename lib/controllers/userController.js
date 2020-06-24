

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.removeUser = exports.getUsers = exports.updateUser = exports.getUser = exports.saveUser = undefined;

const _user = require('../models/user');

const _user2 = _interopRequireDefault(_user);

const _userRepository = require('../repository/userRepository');

const _uuid = require('uuid');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const saveUser = exports.saveUser = function saveUser(request, response) {
    const id = (0, _uuid.v4)();
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = false;
    const user = new _user2.default(id, login, password, age, isDeleted);
    (0, _userRepository.save)(user);
    response.status(201).send(user);
};

const getUser = exports.getUser = function getUser(request, response) {
    const id = request.params.id;
    const user = (0, _userRepository.getById)(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

const updateUser = exports.updateUser = function updateUser(request, response) {
    const id = request.params.id;
    const login = request.body.login;
    const password = request.body.password;
    const age = request.body.age;
    const isDeleted = request.body.isDeleted;
    let user = new _user2.default(id, login, password, age, isDeleted);
    user = (0, _userRepository.update)(user);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};

const getUsers = exports.getUsers = function getUsers(request, response) {
    const loginSubstring = String(request.body.loginSubstring);
    const limit = parseInt(request.body.limit, 10);
    if (loginSubstring && limit && limit >= 0) {
        response.send((0, _userRepository.getAutoSuggestUsers)(loginSubstring, limit));
    } else {
        response.send((0, _userRepository.getAll)());
    }
};

const removeUser = exports.removeUser = function removeUser(request, response) {
    const id = request.params.id;
    const user = (0, _userRepository.remove)(id);
    if (user) {
        response.send(user);
    } else {
        response.status(404).send();
    }
};
