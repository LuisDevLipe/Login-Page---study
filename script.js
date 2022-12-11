// function validarEmail(event){
//     event.preventDefault()
//     const email = document.getElementById('user').value;
//     const senha = document.getElementById('senha').value;

//     const Regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i ;

//         if(email.test(Regex)){
//             return true;
//         } else {
//             document.getElementById('user_error').textContent = "Por favor verifique por erros no usuario/email digitado"
//         }


// }

// // how to validate emai?

const user = ["admin","admin@admin"] ;
const senha = "admin" ;

function validateLogin(event){
    event.preventDefault();
    const userInput = document.getElementById('user').value;
    const senhaInput = document.getElementById('senha').value;

    if((userInput == user[0] || userInput == user[1]) && senhaInput == senha){
        // console.log('ok');
            modal.style.display = "block";
            document.getElementById('userNameRef').textContent = userInput;
        return true; 
    } else {
        // console.log('error')
        return false;
    }
}
const form = document.getElementById('form');
form.addEventListener('submit',validateLogin);

const modal = document.getElementById('loginRedirect_modal');

const fechar = document.getElementsByClassName('fechar')[0];

fechar.onclick = function() {
    modal.style.display = "none";
  }
  