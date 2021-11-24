const fs=require('fs');

 try {
    const listaTareas=JSON.parse(fs.readFileSync('./tareas.json','utf-8'));
  
    switch (true) {
        case process.argv[2] === "listar" || process.argv[2] ==="LISTAR" || process.argv[2] ==="Listar":
            listaTareas.forEach((elemento,i) =>  console.log(`${i+1}) Tarea: ${elemento.título}, estado: ${elemento.estado}`));
            break;

        case process.argv[2] === undefined:
            console.log("Atención - Tienes que pasar una acción.");
            break;

        default:
            console.log("No entiendo qué quieres hacer.");
    }

} catch (error) {
    console.log("JSON NO encontrado!!!");
}
