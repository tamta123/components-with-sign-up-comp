const errors = document.querySelectorAll('.error')
const inputBoxes = document. querySelectorAll('.input-box')
const errorIcons = document.querySelectorAll('.input-box img')

const submitFc = (event,form) => {
    event.preventDefault();
    const nameIsValid = nameValidation(form.name.value.trim());
    const surnameIsValid = lastNameValidation(form.surname.value.trim());
    const emailIsValid = emailValidation(form.email.value.trim());
    const passwordIsValid = passwordValidation(form.password.value);

    if(nameIsValid && surnameIsValid && emailIsValid && passwordIsValid){
        console.log('Form is submitted!');
    }
}

function nameValidation(name) {
    if(name===""){
        inputBoxes[0].style.borderColor='#ff7979'
        errors[0].textContent = 'First Name cannot be empty';
        errorIcons[0].style.display = "block"
        return false; 
        // ამას რატო ვინახავთ?
    }
    return true; 
}

function lastNameValidation(surname){
    if(surname===''){
        inputBoxes[1].style.borderColor = '#ff7979'
        errors[1].textContent = 'Surname cannot be empty';
        errorIcons[1].style.display = "block"
        return false
    }
    return true;
}

function emailValidation(email){
    if(email===''){
        inputBoxes[2].style.borderColor = '#ff7979'
        errors[2].textContent ='e-mail cannot be empty';
        errorIcons[2].style.display = "block"
    if(!email.includes('@') || !email.includes("."))
        inputBoxes[2].style.borderColor = '#ff7979'
        errors[2].textContent ='Looks like this is not an e-mail';
        errorIcons[2].style.display = "block"
        return false;
}
    return true;
}

function passwordValidation(password){
    if(password ===''){
        inputBoxes[3].style.borderColor = '#ff7979'
        errors[3].textContent = 'password cannot be empty';
        errorIcons[3].style.display = "block"
        return false;
    }
    return true;
}

const removeErrors = (index) => {
    console.log(index)
    inputBoxes[index].style.borderColor ='#dedede';
    errors[index].textContent = "";
    errorIcons[index].style.display = "none";
}