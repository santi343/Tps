const fs = require('fs');
const path = require('path');

module.exports = (req, res, next) => {
    fs.appendFileSync(path.join(__dirname, '../logs/userLogs.txt'), `El Usuario ingresó a la ruta: ${req.url}\n`);
    next();
}
