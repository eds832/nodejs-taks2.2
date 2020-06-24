

Object.defineProperty(exports, '__esModule', {
    value: true
});
const users = [];

const save = exports.save = function save(user) {
    users.push(user);
};

const getById = exports.getById = function getById(id) {
    const user = users.find((u) => {
        return u.id === id;
    });
    return user && !user.isDeleted ? user : null;
};

const update = exports.update = function update(user) {
    let userToUpdate = null;
    if (user && user.id) {
        userToUpdate = users.find((u) => {
            return u.id === user.id;
        });
        if (userToUpdate) {
            userToUpdate = user;
        }
    }
    return userToUpdate;
};

const getAutoSuggestUsers = exports.getAutoSuggestUsers = function getAutoSuggestUsers(loginSubstring, limit) {
    const autoSuggestUsers = [];
    for (let i = 0; i < users.length && autoSuggestUsers.length !== limit; i++) {
        if (users[i].login.indexOf(loginSubstring) > -1 && !users[i].isDeleted) {
            autoSuggestUsers.push(users[i]);
        }
    }
    autoSuggestUsers.sort((u1, u2) => {
        return u1.login.localeCompare(u2.login);
    });
    return autoSuggestUsers;
};

const getAll = exports.getAll = function getAll() {
    return users.filter((u) => {
        return u.isDeleted === false;
    });
};

const remove = exports.remove = function remove(id) {
    const user = users.find((u) => {
        return u.id === id;
    });
    if (user) {
        user.isDeleted = true;
    }
    return user;
};
