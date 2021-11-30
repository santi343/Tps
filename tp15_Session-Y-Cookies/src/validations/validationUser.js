const {body} = require('express-validator');
module.exports = {

    validationUser : [
        body('name').notEmpty().withMessage('Debes de ingresar un Nombre valido').bail().isLength({min:2, max:20}).withMessage('El nombre deber contener entre 2 y 20 caracteres'),

        body('email').notEmpty().withMessage('Debes ingresar un Email').bail().isEmail().withMessage('El formato de Email no es es valido'),

        body('age').notEmpty().withMessage('Debes de ingresar una edad valida').bail()


    ]
}
