const dishes = require('../data/dishes_db');

module.exports ={
    index : (req, res,next) => {
        res.render('index',{
            dishes : dishes,
        })
    }
}
