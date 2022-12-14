const h1 = document.getElementsByTagName('h1');
const dm = document.getElementById('darkMode');
dm.onclick = function(){
    h1.innerText="This is dark mode";
}