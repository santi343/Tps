const users = require('../data/users_db')
const adminLogs = require('../middlewares/adminLogs')
module.exports ={
    index : (req, res)=>{
        res.render('index',{

        })
    },
    admin : (req, res) =>{
        res.send(adminLogs)

    }
}
