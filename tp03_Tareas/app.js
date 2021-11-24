const {listar, guardarTarea, leerPorEstado, listarFiltrados}=require('./tareasJs')

const tarea=process.argv[2];

switch (true) {
    
    case tarea === undefined:
        console.log("Atención - Tienes que pasar una acción.");    
        break;

    case tarea.toLowerCase() === "listar":
        process.argv[3] === undefined
        ? listar()
        : console.log("Ingreso un valor demás");
        break;

    case tarea.toLowerCase() === "crear":
        if(process.argv[3] !== undefined){
            const nuevaTarea={
                título: process.argv[3],
                estado: "pendiente"
            }
            guardarTarea(nuevaTarea);
            listar();
        }else console.log("NO ingreso un título para la tarea!!!");
        break;
    
    case tarea.toLowerCase() === "filtrar":
        if(process.argv[3] !== undefined){
           const filtrados=leerPorEstado(process.argv[3].toLowerCase());
           filtrados.length === 0
           ? console.log("Ningun dato encontrado con lo que ingreso!!!")
           : listarFiltrados(filtrados);
        }else console.log("NO ingreso el estado por el que quiere Filtrar!!!");
        break;
        
    default:
        console.log("No entiendo qué quieres hacer.");
} 
