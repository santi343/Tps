const platos_db = require ( '../data/platos_db' ) ;


const platos = require ( '../data/platos_db' ) módulo . exportaciones = { índice : ( req , res ) => { volver res . render ( 'índice' , { platos : platos_db } ) } , detalle : ( req , res ) => { // let id = req.params.id; vamos plato = platos_db . buscar ( plato => plato . id === + req . params . id ) ; // console.log (plato); // devuelve res, envía (plato) volver res . render ( 'detalleMenu' , { plato , } ) } } 
module.exports ={
    index : (req, res,next) => {
        res.render('index',{
            disches: 
        })
    }
}
