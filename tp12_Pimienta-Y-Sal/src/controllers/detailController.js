const dishes = require('../data/dishes_db')
module.exports ={
    detail : (req, res, next) =>{
        res.render('detail',{
            id : req.params.id,
            plate : dishes[req.params.id-1]
        })
    }
}
