const fs=require('fs');

 try {
    const listaTareas=JSON.parse(fs.readFileSync('./tareasJSON/tareas.json','utf-8'));
  
    module.exports= tareas ={

        listar: function(){
            tareas.leerJSON().forEach((elemento, i) => 
                console.log(`${i+1}) Tarea: ${elemento.título},\n   estado: ${elemento.estado}`)
            );
        },
        
        listarFiltrados:function(array){
            array.forEach(elemento => console.log(elemento));

        },

        escribirJSON: function(array){
            fs.writeFileSync('./tareasJSON/tareas.json', JSON.stringify(array, null, 2), 'utf-8');
        },

        guardarTarea: function(objTarea){
            const modificacion=tareas.leerJSON();
            modificacion.push(objTarea);
            tareas.escribirJSON(modificacion); 
        },

        leerJSON: function(){
            return listaTareas;
        },

        leerPorEstado: function(estado){
            return tareas.leerJSON().filter(elemento=>elemento.estado === estado)
        }
    }

    
} catch (error) {
    console.log("JSON NO encontrado!!!");
}

