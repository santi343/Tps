const path = require("path");
const { check, body } = require("express-validator");

module.exports = [
    check("name")
        .notEmpty()
        .withMessage("El Nombre es obligatorio")
        .bail()
        .isLength({
            min: 2,
            max: 50,
        })
        .withMessage("El nombre tiene que tener entre 2 y 50 caracteres"),
        //.bail()
        //.isAlpha()
        //.withMessage("El Nombre debe contener solo letras"),

    check("last_name")
        .notEmpty()
        .withMessage("El Apellido es obligatorio")
        .bail()
        .isLength({
            min: 2,
            max: 50,
        })
        .withMessage("El Apellido tiene que tener entre 2 y 50 caracteres")
        .bail()
        .isAlpha()
        .withMessage("El Apellido debe contener solo letras"),

    check("email").isEmail().withMessage("Debes ingresar un email válido"),

    check("date_of_birth")
        .isDate()
        .withMessage("Debe Tildar una Fecha de Nacimiento"),

    check("address")
        .notEmpty()
        .withMessage("La Dirección es obligatoria")
        .bail()
        .isLength({
            min: 3,
            max: 100,
        })
        .withMessage("La Dirección tiene que tener entre 3 y 100 caracteres"),

    check("category")
        .notEmpty()
        .withMessage("Debes seleccionar al menos una categoria"),

    body("photo").custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png", ".gif"];
        if (!file) {
            throw new Error("Tienes que subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!acceptedExtensions.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones de archivo permitidas son ${acceptedExtensions.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),

    check("password1")
        .isLength({
            min: 6,
            max: 12,
        })
        .withMessage("La contraseña debe tener entre 6 y 12  caracteres"),

    body("password2")
        .custom((value, { req }) => {
            if (value !== req.body.password1) {
                return false;
            }
            return true;
        })
        .withMessage("Las contraseñas no coinciden"),
];
