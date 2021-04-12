//Função snapcrackle

let frase = "";

function snapCrackle(maxValue){

    for(let i = 1; i <= maxValue; i++){
        if(i % 2 !== 0 && i % 5 === 0){
            frase += "SnapCrackle, ";
        } 
            else if(i % 5 === 0){
                frase += "Crackle, "
            }
                else if(i % 2 !== 0){
                    frase += "Snap, ";
                }
                    else{
                        frase += i + ", ";
                    }
    }
    console.log(frase);   
}