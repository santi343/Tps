const path = require('path');
const fs = require('fs');

module.exports = {
    users : JSON.parse(fs.readFileSync(path.join(__dirname, 'users.json'), 'utf8')),
    saveJsAJson : data => fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(data, null, 2), 'utf-8')
}
