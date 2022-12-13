// Password .includes()
// create a form with field name, password and confirm password. validations- password should match confirm password, password should contain digits and letters, no field should be empty. 'required'
// include a mouse over event i.e. highlight text 
const container = document.getElementById('signup');

const pw = document.getElementById('pw');
const pwc = document.getElementById('pwc');


function validate(){
    const form = document.forms["signUp"];
    for(let i = 0;i<form.length;i++){
        console.log(form.elements[i].value);
        if(form.elements[i].value==""){
            alert("enter a value");
            return false;
        }
    }
}

const btn = document.getElementsByTagName("button");
btn.onmouseover = function(){
    const btn = document.getElementById('btn');
    btn.style.color="red";
}

btn.onmouseout