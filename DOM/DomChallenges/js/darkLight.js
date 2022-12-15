
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
    bodDark.style.backgroundColor='white';
    
}