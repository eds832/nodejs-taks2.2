

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _userRouter = require('./routes/userRouter');

const _userRouter2 = _interopRequireDefault(_userRouter);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express2.default)();

app.use(_express2.default.json());

app.use('/users', _userRouter2.default);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.listen(5000);
