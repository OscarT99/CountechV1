verificarFormulario = () => {
    const validarOrdenTrabajoRespuesta = validarOrdenTrabajo();
    const validarValorTotalRespuesta = validarValorTotal ();
    const validarFechaOrdenTrabajoRespuesta = validarFechaOrdenTrabajo ();
    const validarFechaEntregaOrdenTrabajoRespuesta = validarFechaEntregaOrdenTrabajo ();
    

    if (validarOrdenTrabajoRespuesta && validarFechaOrdenTrabajoRespuesta && validarFechaEntregaOrdenTrabajoRespuesta && validarValorTotalRespuesta){
        window.location.href = '/pedidos'
    }
}

validarOrdenTrabajo = () => {
    let ordenTrabajo = document.getElementById('ordenTrabajo').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (ordenTrabajo === null || ordenTrabajo === '' || ordenTrabajo.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un numero de orden de trabajo</span   >';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (!expresion.test(ordenTrabajo)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (ordenTrabajo.length < 3) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero tiene que ser mayor o igual a 3 caracteres numericos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    } else if (ordenTrabajo.length > 7) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El numero tiene que ser menor o igual carcateres numericos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;    
    }else{
      document.getElementById('errorOrdenTrabajo').innerHTML = '';
      return true;
    } 
}

validarValorTotal = () => {
    let valorTotal = document.getElementById('valorTotal').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (valorTotal === null || valorTotal === '' || valorTotal.length === 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor total</span   >';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else if (!expresion.test(valorTotal)) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permite numeros</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else if (valorTotal.length <= 0) {
      texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El valor total no puede ser menor o igual a 0</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    } else{
      document.getElementById('errorValorTotal').innerHTML = '';
      return true;
    } 
}

validarFechaOrdenTrabajo = () => {

    let fechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo').value
    let texto;
    let fechaEntregaOrdenTrabajo = document.getElementById('fechaEntregaOrdenTrabajo').value
    let fechaActual = new Date().toISOString().split('T')[0];
    
    if (fechaOrdenTrabajo === null || fechaOrdenTrabajo === '' || fechaOrdenTrabajo.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de la orden de trabajo</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if (fechaOrdenTrabajo > fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de registro</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if(fechaOrdenTrabajo > fechaEntregaOrdenTrabajo){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de entrega</span>';
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaOrdenTrabajo').innerHTML = '';
      return true;
      }
}

validarFechaEntregaOrdenTrabajo = () => {

    let fechaEntregaOrdenTrabajo = document.getElementById('fechaEntregaOrdenTrabajo').value
    let texto;
    let fechaActual = new Date().toISOString().split('T')[0];
    let fechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo').value

    if (fechaEntregaOrdenTrabajo === null || fechaEntregaOrdenTrabajo === '' || fechaEntregaOrdenTrabajo.length === 0) {
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de entrega de la orden de trabajo</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if (fechaEntregaOrdenTrabajo < fechaActual){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser menor a la fecha de registro</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else if(fechaEntregaOrdenTrabajo < fechaOrdenTrabajo){
        texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser menor a la fecha de entrega</span>';
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = texto;
        return false;
      }else{
        document.getElementById('errorFechaEntregaOrdenTrabajo').innerHTML = '';
      return true;
      }
}




const boton = document.querySelector('#formulario')

boton.addEventListener('click',verificarFormulario)