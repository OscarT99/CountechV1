verificarFormulario = () => {
    const validarNombreRespuesta = validarNombre ();
    const validarCedulaRespuesta = validarCedula ();
    const validarCorreoRespuesta = validarCorreo ();
    
    
    if (validarNombreRespuesta && validarCedulaRespuesta && validarCorreoRespuesta){
      window.location.href = '/usuarios'
    }
    
  }
  
  validarNombre = () => {
    let nombre = document.getElementById('nombre').value
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (nombre === null || nombre === '' || nombre.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el nombre</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } if (nombre.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre debe de ser mayor o igual a 3 letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } if (!expresion.test(nombre)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorNombre').innerHTML = texto;
      return false;
    } else {
      document.getElementById('errorNombre').innerHTML = '';
      return true;
    }
  };

  validarCedula = () => {
    let cedula = document.getElementById('cedula').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cedula === null || cedula === '' || cedula.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de identificación</span   >';
      document.getElementById('errorcedula').innerHTML = texto;
      return false;
    } if (!expresion.test(cedula)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorcedula').innerHTML = texto;
      return false;
    } if (cedula.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser mayor a 6 caracteres numericos</span>';
      document.getElementById('errorcedula').innerHTML = texto;
      return false;
    } if (cedula.length > 11) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero de identidad tiene que ser menor a 11 carcateres numericos</span>';
      document.getElementById('errorcedula').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorcedula').innerHTML = '';
      return true;
    } 
  }
  

  validarCorreo = () => {
    let correo = document.getElementById('correo').value.trim();
    let texto;
    let expresion = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;3
  
    if (!correo) {      
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    } if (!expresion.test(correo)) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
        document.getElementById('errorCorreo').innerHTML = texto;
        return false;
    }else {
      document.getElementById('errorCorreo').innerHTML = '';
      return true;
    }
  }

  
  const boton = document.querySelector('#formulario')
  
  boton.addEventListener('click',verificarFormulario)