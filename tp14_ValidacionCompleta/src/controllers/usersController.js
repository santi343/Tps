const { users, saveJsAJson } = require("../data/users_db");
const { validationResult } = require("express-validator");

module.exports = {
    users: (req, res) => {
        res.send(users);
    },

    register: (req, res) => {
        res.render("register");
    },

    processRegister: (req, res) => {
        let errors = validationResult(req);
        let {
            name,
            last_name,
            email,
            date_of_birth,
            address,
            buyShell,
            category,
            password1,
            password2,
        } = req.body;
        //console.log(users[0].id)

        if (errors.isEmpty()) {
            //let auxId = users.length > 0 ? users[users.lenght - 1].id + 1 : 1;
            let auxUsers = {
                id: users.lenght > 0 ? users[users.lenght -1 ].parseInt(id) + 1 : "1",
                name,
                last_name,
                email,
                date_of_birth,
                address,
                buyShell,
                category,
                photo: req.file.filename,
                password1,
                password2,
            };
            users.push(auxUsers);
            saveJsAJson(users);
            return res.redirect("/");
        } else {
            return res.render("register", {
                users,
                old: req.body,
                errors: errors.mapped(),
            });
        }
    },
};
