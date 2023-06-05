// Create two buttons and a heading
// -  with event listeners change the style so that one button changes your pages style to dark mode, 
// - and the other button changes your pages style to light mode
// ! - Make sure your heading and buttons are viewable when switching between modes
function dm(){
    const h1 = document.getElementById('title');
    h1.innerHTML="This is dark mode"
    let darkDiv = document.getElementById('change');
    darkDiv.style.color="white";
    darkDiv.style.backgroundColor="black";
    const bodDark = document.getElementById('bod');
    bodDark.style.backgroundColor='black';
    
    
}
function lm(){
    const h1 = document.getElementById('title');
    h1.innerHTML="This is light mode";
    lightDiv = document.getElementById('change');
    lightDiv.style.color="black";
    lightDiv.style.backgroundColor='white';
    const bodLight = document.getElementById('bod');
    bodLight.style.backgroundColor='white';
    
}