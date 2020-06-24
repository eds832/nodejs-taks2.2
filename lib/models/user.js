

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

const User = function User(id, login, password, age, isDeleted) {
    _classCallCheck(this, User);

    this.id = id;
    this.login = login;
    this.password = password;
    this.age = age;
    this.isDeleted = isDeleted;
};

exports.default = User;
