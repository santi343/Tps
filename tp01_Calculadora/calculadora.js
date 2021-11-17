const sumar= require(`./operaciones/sumar`);
const restar= require(`./operaciones/restar`);
const multiplicar= require(`./operaciones/multiplicar`);
const dividir= require(`./operaciones/dividir`);


const process= require(`process`);
console.log("hola")

if(!(process.argv[2])){

    console.log(`Operación NO declarada!!!`);

}else{

    if((process.argv[3] && process.argv[4]) && (!isNaN(process.argv[3]) && !isNaN(process.argv[4]))) {
        let resultado;
        let b=true;
        let operacion=process.argv[2].toLowerCase();
        let numero1=Number(process.argv[3]);
        let numero2=Number(process.argv[4]);

            switch(operacion){
                case 'sumar': 
                    resultado= sumar(numero1,numero2);
                    break;
                case `restar`:
                    resultado= restar(numero1, numero2);
                    break;
                case `multiplicar`:
                    resultado= multiplicar(numero1, numero2);
                break;
                case `dividir`:
                    resultado= dividir(numero1,numero2);
                break;
                default:
                    console.log(`NO se puede realizar la operacion!!!(NO declaro bien la operacion)`);
                    b=false;


            }
            if(b){
                if(!(operacion === `dividir` && numero2 === 0)) console.log(`El resultado de la operación es: ${resultado}`);
    
                else console.log(resultado);
            }
       
    }else{

        console.log(`Números MAL declarados!!!`);
        
    }
}
