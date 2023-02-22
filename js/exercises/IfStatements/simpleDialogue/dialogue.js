
// -- from carters challenges --  this was previously linked to an html file but is currently a free standing document
//--- Print user input to console.log ---
// --- prompt is incorrect, this program does not work
const pc = ["red", "blue", "yellow"]
let answer = prompt("what is your favourite colour?");
if(answer === pc[0]){
   console.log(answer);
   prompt("what is your second favourite colour?")
   if(answer === pc[0]){
      console.log(answer);
      alert("Wow! You really like red!");
   }else if(answer === pc[1]){
   console.log(answer);
   alert("You must love purple!");
   }else if(answer === pc[2]){
      console.log(answer);
      alert("You must love orange!")
   }else{
      alert("incorrect input");
      }    
}else if(answer === pc[1]){
   console.log(answer);
   prompt("what is your second favourite colour?")
   if(answer === pc[0]){
      console.log(answer);
      alert("You must love purple!");
   }else if(answer === pc[1]){
   console.log(answer);
   alert("Wow! You really love blue!");
   }else if(answer === pc[2]){
      console.log(answer);
      alert("You must love green!")
   }else{
      alert("incorrect input");
      }    

}else if(answer === pc[2]){
   console.log(answer);
   prompt("what is your second favourite primary colour?");
      if(answer === pc[0]){
         console.log(answer);
         alert("You must love orange!");
      }else if(answer === pc[1]){
      console.log(answer);
      alert("You must love green!");
      }else if(answer === pc[2]){
      console.log(answer);
      alert("Wow! You really love yellow");
      }else{
      alert("incorrect input");
      }   
   
}else {
   alert("incorrect input");
}