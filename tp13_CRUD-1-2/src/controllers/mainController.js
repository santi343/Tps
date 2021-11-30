const fs = require("fs");
const path = require("path");
const {products, toThousand, discount } = require('../methods/general')

module.exports  = {
    index: (req, res) => {
        const visited = products.filter(
            (product) => product.category === "visited"
        );
        const inSale = products.filter(
            (product) => product.category === "in-sale"
        );
        res.render("index", {
            products,
            visited,
            inSale,
            discount,
            toThousand,
        });
    },
    search: (req, res) => {
        const results = products.filter(product => product.name.toLowerCase().includes(req.query.keywords.toLowerCase().trim()));
        res.render("results", {
            products,
            results,
            search : req.query.keywords

        })
    },
};

