const fs = require('fs');
const path = require('path');

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf-8'));
