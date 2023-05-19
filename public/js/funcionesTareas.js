verificarFormulario = () => {
    const validarCantidadRespuesta = validarCantidad();
    

    if (validarCantidadRespuesta){
        window.location.href = '/produccion'
    }
}

validarCantidad = () => {
    let cantidad = document.getElementById('cantidad').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cantidad === null || cantidad === '' || cantidad.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span   >';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    } if (!expresion.test(cantidad)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite números</span>';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    } if (cantidad <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a 0</span>';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    } else{
      document.getElementById('errorCantidad').innerHTML = '';
      return true;
    } 
}


const boton = document.querySelector('#formulario')
boton.addEventListener('click',verificarFormulario)