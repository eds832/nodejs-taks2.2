const users = [];

export const save = (user) => {
    users.push(user);
};

export const getById = (id) => {
    const user = users.find((u) => (u.id === id));
    return user && !user.isDeleted ? user : null;
};

export const update = (user) => {
    let userToUpdate = null;
    if (user && user.id) {
        userToUpdate = users.find((u) => (u.id === user.id));
        if (userToUpdate) {
            userToUpdate = user;
        }
    }
    return userToUpdate;
};

export const getAutoSuggestUsers = (loginSubstring, limit) => {
    const autoSuggestUsers = [];
    for (let i = 0; i < users.length && autoSuggestUsers.length !== limit; i++) {
        if (users[i].login.indexOf(loginSubstring) > -1 && !users[i].isDeleted) {
            autoSuggestUsers.push(users[i]);
        }
    }
    autoSuggestUsers.sort((u1, u2) => u1.login.localeCompare(u2.login));
    return autoSuggestUsers;
};

export const getAll = () => {
    return users.filter((u) => u.isDeleted === false);
};

export const remove = (id) => {
    const user = users.find((u) => (u.id === id));
    if (user) {
        user.isDeleted = true;
    }
    return user;
};
