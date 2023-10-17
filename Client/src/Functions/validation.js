const regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;


const validate = (userData, setErrors, errors) => {
  let newErrors = errors;

  // Validación del email
  if (!userData.email) newErrors.email = 'El email está vacío'
  else if(!regexMail.test(userData.email)) newErrors.email = 'Email inválido'
  else if (userData.email.length > 35) newErrors.email = 'El email no puede tener más de 35 caracteres' 
  else newErrors.email = '';


  // Validación de la contraseña
  if (!userData.password) newErrors.password = 'La contraseña está vacía'
 else if (!/\d/.test(userData.password)) newErrors.password = 'La contraseña debe contener al menos un número'
  else if (userData.password.length < 6 || userData.password.length > 10) newErrors.password = 'La contraseña debe tener entre 6 y 10 caracteres'
   else newErrors.password = '' 

   setErrors(newErrors)
  };

export default validate;
