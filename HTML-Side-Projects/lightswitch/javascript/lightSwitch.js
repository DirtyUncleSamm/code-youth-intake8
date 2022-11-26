/*
Bonus Question
There are 4 switches and 1 light, switchA, switchB, and switchC, and switchD
In order for the light to turn on switchA must be on and switchB or switchD must be on, switchC must be off.
​
*/

let switchA = true, switchB = false, switchC = true, switchD=false;
let light;
if(switchC == false){
    if(switchA == true){
        if(switchB == true || switchD == true){
            light=true;
        }else{
            light=false;
        }
    }else{
            light=false;
        }
}else{ 
    light = false;
}
console.log(light)