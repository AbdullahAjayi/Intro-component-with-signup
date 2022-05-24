// Hello, thanks for viewing my code. I added explanatory notes just incase there might be someone who needs it.
// I'd appreciate your feedback for improvements or on best practices for form validation pages like this.
// Thanks


// Classes to be used for form validation:
const form = document.querySelector('#form');
const inputField = document.querySelectorAll('input-field')
const inputs = Array.from(document.getElementsByTagName('input')); //Turning HTML collection into array inorder to loop through.
let emailErrorMessage = document.querySelector('.email-error')

// When user submits form
function onSubmit(e){
    // Prevent default behaviour of the browser when user submits a form
    e.preventDefault();
    // For each input in the array of inputs,
    inputs.forEach(input => {
        // If user does not provide any value in input, show error message:
        if(!input.value){
        input.parentElement.parentElement.classList.add('error');
        }
        // If user provides a value, remove error message and add success class:
        else{
        input.parentElement.parentElement.classList.remove('error');
        input.parentElement.classList.add('success');
        
        // But if the input is that of email type;
        if(input.type == 'email'){
            // Check if email syntax is correct using regex function declared at line 46;
            // If email syntax is valid, still retain success class
           if(validateEmail(input.value)){
            input.parentElement.parentElement.classList.remove('error')
           }

           // If not, add error message
           else{
            input.parentElement.parentElement.classList.add('error');
            emailErrorMessage.textContent = 'Looks like this is not an email';
           }
        }
        }
    })
}

// Event for submition
form.addEventListener('submit', onSubmit);

// Email validation with regex
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };