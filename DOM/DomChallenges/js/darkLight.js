
function dm(){
    const h1 = document.getElementById('title');
    h1.innerHTML="This is dark mode"
    
    let darkDiv = document.getElementById('change');
    console.log(darkDiv);
    darkDiv.setAttribute('className', 'darkdiv');
    
}
function lm(){
    const h1 = document.getElementById('title');
    h1.innerHTML="This is light mode";

    
}