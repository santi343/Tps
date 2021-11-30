const fs = require("fs");
const path = require("path");
module.exports = (products) => {
    fs.writeFileSync(
        path.join(__dirname, "../data/productsDataBase.json"),
        JSON.stringify(products, null, " "),
        "utf-8"
    );
};
