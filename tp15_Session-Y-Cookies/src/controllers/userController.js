const { validationResult } = require("express-validator");
module.exports = {
    user : (req, res, next) => {
        res.render("user", {});
    },

    processUser : (req, res, next) => {
        const resultValidation = validationResult(req);
        //res.send(resultValidation);

        if (resultValidation.errors.length > 0) {
            return res.render("user", {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }

        return res.render("userLog",{
            data : req.body

        });
    },

};
