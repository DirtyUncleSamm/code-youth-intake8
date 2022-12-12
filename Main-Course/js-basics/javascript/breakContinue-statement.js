for(let i=0;i<10;i++){
    console.log(i);
    if(i==5){
        continue; 
        console.log("continue");
    }
    
}
console.log("if there is a continue statement once the program is run it will skip the next iteration and continue to the next program")

for(let i=0;i<10;i++){
    console.log(i);
    if(i==5){
        break; 
        console.log("break");
    }
    
}