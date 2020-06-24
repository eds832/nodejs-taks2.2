

Object.defineProperty(exports, '__esModule', {
    value: true
});

const _express = require('express');

const _express2 = _interopRequireDefault(_express);

const _userController = require('../controllers/userController');

const _schemas = require('../schemas/schemas');

const _validator = require('../schemas/validator');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

const userRouter = _express2.default.Router();

userRouter.post('/', (0, _validator.validateSchema)(_schemas.userCreateSchema), _userController.saveUser);
userRouter.get('/:id', _userController.getUser);
userRouter.get('/', _userController.getUsers);
userRouter.put('/:id', (0, _validator.validateSchema)(_schemas.userUpdateSchema), _userController.updateUser);
userRouter.delete('/:id', _userController.removeUser);

exports.default = userRouter;
