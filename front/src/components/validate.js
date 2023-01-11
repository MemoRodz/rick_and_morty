const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,10}/;

export default function validate(inputs){
    const errors ={}
    if(!inputs.username){
        errors.username = 'El usuario no debe estar vacío.'
    }
    else if(!regexUsername.test(inputs.username)){
        errors.username = 'El usuario debe un correo electrónico válido.'
    }
    else if(!inputs.username.length > 35){
        errors.username = 'El usuario debe ser menor a 35 caracteres.'
    }
    else if(!inputs.password){
        errors.password = 'El password no debe estar vacío.'
    }
    else if(!regexPassword.test(inputs.password)){
        errors.password = "El password debe tener una longitud entre 6 y 10 caracteres y al menos 1 caracter especial"
    }
    return errors
};