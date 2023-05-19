verificarLogin = () => {

    const validarCorreoRespuesta = validarCorreo ();
    const validarContraseñaRespuesta = validarContraseña ();

    if (validarContraseñaRespuesta && validarCorreoRespuesta){
        window.location.href = '/index'
    }
    }

    validarCorreo = () => {
        let correo = document.getElementById('correo').value
        
        
        if (!correo) {      
            texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese su dirección de correo electrónico.</span>';
            document.getElementById('errorCorreo').innerHTML = texto;
            return false;
        } else if (!correo === 'oscar99@misena.com') {
            texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una dirección de correo electrónico válida.</span>';
            document.getElementById('errorCorreo').innerHTML = texto;
            return false;
        }else {
          document.getElementById('errorCorreo').innerHTML = '';
          return true;
        }
    }

    
    validarContraseña = () => {
        let contraseña = document.getElementById('contraseña').value

        if (!contraseña){
            texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, ingrese la contraseña.</span>';
            document.getElementById('errorContraseña').innerHTML = texto;
            return false;
        }else if (!contraseña === '12345'){
            texto = texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una contraseña válida.</span>';
            document.getElementById('errorContraseña').innerHTML = texto;
            return false;
        }else{
            document.getElementById('errorContraseña').innerHTML = '';
            return true;
        }
    }

    
    


    



    

    



const boton = document.querySelector('#iniciarSesion')

boton.addEventListener('click',verificarLogin)