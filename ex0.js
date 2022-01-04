/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo trimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios 
 * casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 10;


switch (mes) {
    case 1:
        console.log ("1er trimestre");
        break;
    case 2:
        console.log ("1do trimestre");    
        break;
    case 3:
        console.log ("1er trimestre");    
        break;
    case 4:
        console.log ("2to trimestre");    
        break;
    case 5:
        console.log ("2to trimestre");    
        break;
    case 6:
        console.log ("2to trimestre");    
        break;
    case 7:
        console.log ("3to trimestre");    
        break;
    case 8:
        console.log ("3to trimestre");    
        break;
    case 9:
        console.log ("3to trimestre");    
        break;
    case 10:
        console.log ("4to trimestre");    
        break;
    case 11:
        console.log ("4to trimestre");    
        break;
    case 12:
        console.log ("4to trimestre");    
        break;
    default:    
        console.log ("default");
}

switch (true) {
    case mes >0 && mes <=3:
        console.log ("1er trimestre b");
        break;
    case mes >3 && mes <=6:
        console.log ("2do trimestre b");
        break;
    case mes >6 && mes <=9:
        console.log ("3er trimestre b");
        break;
    case mes >9 && mes <=12:
        console.log ("4to trimestre b");
        break;
    default: 
        console.log ("default b");

}

// Escribir a partir de aquí


