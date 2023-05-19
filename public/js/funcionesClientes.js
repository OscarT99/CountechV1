verificarFormulario = () => {
  const validarNombreComercialRespuesta = validarNombreComercial ();
  const validarRazonSocialRespuesta = validarRazonSocial ();
  const validarContactoRespuesta = validarContacto ();
  const validarNumeroIdentificacionRespuesta = validarNumeroIdentificacion ();
  const validarCiudadRespuesta = validarCiudad ();
  const validarDireccionRespuesta = validarDireccion ();
  const validarTelefonoRespuesta = validarTelefono ();
  const validarCorreoRespuesta = validarCorreo ();
  
  
  if (validarNumeroIdentificacionRespuesta && validarRazonSocialRespuesta && validarNombreComercialRespuesta && validarCiudadRespuesta && validarDireccionRespuesta && validarTelefonoRespuesta && validarCorreoRespuesta && validarContactoRespuesta){
    window.location.href = '/clientes'
  }
  
}

validarNombreComercial = () => {
  let nombreComercial = document.getElementById('nombreComercial').value
  let texto;
  let expresion = /[a-zA-Z]/;

  if (nombreComercial === null || nombreComercial === '' || nombreComercial.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el nombre comercial de la empresa</span>';
    document.getElementById('errorNombreComercial').innerHTML = texto;
    return false;
  } else if (nombreComercial.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre comercial debe de ser mayor o igual a 3 letras</span>';
    document.getElementById('errorNombreComercial').innerHTML = texto;
    return false;
  } else if (!expresion.test(nombreComercial)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorNombreComercial').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorNombreComercial').innerHTML = '';
    return true;
  }
};

validarRazonSocial = () => {
  let razonSocial = document.getElementById('razonSocial').value
  let texto;
  let expresion = /[a-zA-Z]/;

  if (razonSocial === null || razonSocial === '' || razonSocial.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la razon social de la empresa</span>';
    document.getElementById('errorRazonSocial').innerHTML = texto;
    return false;
  } else if (razonSocial.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">la razon social debe de ser mayor o igual a 3 letras</span>';
    document.getElementById('errorRazonSocial').innerHTML = texto;
    return false;
  } else if (!expresion.test(razonSocial)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorRazonSocial').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorRazonSocial').innerHTML = '';
    return true;
  }
};

validarContacto = () => {
  let validarContacto = document.getElementById('contacto').value
  let texto;
  let expresion = /[a-zA-Z]/;

  if (validarContacto === null || validarContacto === '' || validarContacto.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el contacto de la empresa</span>';
    document.getElementById('errorContacto').innerHTML = texto;
    return false;
  } else if (validarContacto.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre del contacto debe de ser mayor o igual a 3 letras</span>';
    document.getElementById('errorContacto').innerHTML = texto;
    return false;
  } else if (!expresion.test(validarContacto)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorContacto').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorContacto').innerHTML = '';
    return true;
  }
};

validarNumeroIdentificacion = () => {
  let numeroIdentificacion = document.getElementById('numeroIdentificacion').value;
  let texto;
  let expresion = /[0-9]/;

  if (numeroIdentificacion === null || numeroIdentificacion === '' || numeroIdentificacion.length === 0) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de identificación</span   >';
    document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
    return false;
  } else if (!expresion.test(numeroIdentificacion)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
    document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
    return false;
  } else if (numeroIdentificacion.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser mayor a 6 caracteres numericos</span>';
    document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
    return false;
  } else if (numeroIdentificacion.length > 11) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser menor a 11 carcateres numericos</span>';
    document.getElementById('errorNumeroIdentificacion').innerHTML = texto;
    return false;    
  }else{
    document.getElementById('errorNumeroIdentificacion').innerHTML = '';
    return true;
  } 
}

validarCiudad = () => {
  let ciudad = document.getElementById('ciudad').value;
  let texto;
  let expresion = /[a-zA-Z]/;

  if (ciudad === null || ciudad === '' || ciudad.length === 0) {
   
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una ciudad</span>';
    document.getElementById('errorCiudad').innerHTML = texto;
    return false;
  } else if (ciudad.length < 3) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre de la ciudad debe de ser mayor a 3 letras</span>';
    document.getElementById('errorCiudad').innerHTML = texto;
    return false;
  } else if (!expresion.test(ciudad)) {
    texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
    document.getElementById('errorCiudad').innerHTML = texto;
    return false;
  } else {
    document.getElementById('errorCiudad').innerHTML = '';
    return true;
  }
};


validarTelefono = () => {
  let telefono = document.getElementById('telefono').value.trim();
  let texto;
  let expresion = /^[0-9]+$/;

  if (!telefono) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un número de teléfono.</span>';
      document.getElementById('errorTelefono').innerHTML = texto;
      return false;
  } else if (telefono.length < 10) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Su número de teléfono debe tener al menos 10 dígitos.</span>';
      document.getElementById('errorTelefono').innerHTML = texto;
      return false;
  } else if (!expresion.test(telefono)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese solo números en su número de teléfono.</span>';
      document.getElementById('errorTelefono').innerHTML = texto;
      return false;
  }else{
    document.getElementById('errorTelefono').innerHTML = '';
    return true;
  }
};

validarCorreo = () => {
  let correo = document.getElementById('correo').value.trim();
  let texto;
  let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3

  if (!correo) {      
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico.</span>';
      document.getElementById('errorCorreo').innerHTML = texto;
      return false;
  } else if (!expresion.test(correo)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
      document.getElementById('errorCorreo').innerHTML = texto;
      return false;
  }else {
    document.getElementById('errorCorreo').innerHTML = '';
    return true;
  }
}

validarDireccion = () => {
  let direccion = document.getElementById('direccion').value.trim();
  let texto;
  let expresion = /^[a-zA-Z0-9\s'#,-]*$/;

  if (!direccion) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia.</span>';
      document.getElementById('errorDireccion').innerHTML = texto;
      return false;
  } else if (direccion.length < 5) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La dirección de residencia debe tener al menos 5 caracteres.</span>';
      document.getElementById('errorDireccion').innerHTML = texto;
      return false;
  } else if (!expresion.test(direccion)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de residencia válida.</span>';
      document.getElementById('errorDireccion').innerHTML = texto;
      return false;
  }else{
    document.getElementById('errorDireccion').innerHTML = '';
    return true;
  } 
};

const boton = document.querySelector('#formulario')

boton.addEventListener('click',verificarFormulario)