const fs = require("fs");
const path = require("path");
let { products } = require("../methods/general");
const { toThousand, discount, saveJsAJson } = require("../methods/general");

module.exports = {
    // Root - Show all products
    index: (req, res) => {
        res.render("products", {
            products,
            discount,
            toThousand,
        });
    },

    // Detail - Detail from one product
    detail: (req, res) => {
        const product = products.find(
            (product) => product.id === +req.params.id
        );
        res.render("detail", {
            product,
            products,
            discount,
            toThousand,
        });
    },

    // Create - Form to create
    create: (req, res) => {
        res.render("product-create-form", {
            products,
        });
    },

    // Create -  Method to store
    store: (req, res) => {
        const { name, price, discount, category, description } = req.body;
        let id = products[products.length - 1].id + 1;
        const product = {
            id,
            name,
            price: +price,
            discount: +discount,
            category,
            description,
            //VOLVER A VER ESTO
            image: req.file.filename,
            //image: file_image === "" ? "default-image.png" : file_image,
        };
        products.push(product);
        saveJsAJson(products);
        res.redirect("/products");
    },

    // Update - Form to edit
    edit: (req, res) => {
        let product = products.find((product) => product.id === +req.params.id);
        res.render("product-edit-form", {
            product,
        });
    },
    // Update - Method to update
    update: (req, res) => {
        const { name, price, discount, category, description } = req.body;
        products.forEach((product) => {
            if (product.id === +req.params.id) {
                product.name = name;
                product.price = price;
                product.discount = discount;
                product.category = category;
                product.description = description;
            }
        });
        //saveJsAJson(products);
        res.redirect("/products");
    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {
        products = products.filter((product) => product.id !== +req.params.id);
        saveJsAJson(products);
        res.redirect("/products");
    },
};
