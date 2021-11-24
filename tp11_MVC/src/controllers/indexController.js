const path = require('path');

module.exports = {
    index : (req, res, next) => {
        return res.sendFile(path.join(__dirname, '../views/index.html'))
    }
}
