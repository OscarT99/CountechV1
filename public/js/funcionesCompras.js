const verificarFormulario = () => {
    const validarContactoRespuesta = validarContacto();
    const validarFacturaRespuesta = validarFactura();
    const validarFechaCompraRespuesta = validarFechaCompra();
    const validarFechaRegistroRespuesta = validarFechaRegistro();
    const validarValorTotalRespuesta = validarValorTotal();
    const validarCantidadRespuesta = validarCantidad();
  
    if (
      validarContactoRespuesta &&
      validarFacturaRespuesta &&
      validarFechaCompraRespuesta &&
      validarFechaRegistroRespuesta &&
      validarValorTotalRespuesta &&
      validarCantidadRespuesta
    ) {
      window.location.href = '/compras';
    }
  };
  
  const validarContacto = () => {
    let validarContacto = document.getElementById('contacto').value;
    let texto;
    let expresion = /[a-zA-Z]/;
  
    if (
      validarContacto === null ||
      validarContacto === '' ||
      validarContacto.length === 0
    ) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el contacto de la empresa</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    }
    if (validarContacto.length < 3) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El nombre del contacto debe ser mayor o igual a 3 letras</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    }
    if (!expresion.test(validarContacto)) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten letras</span>';
      document.getElementById('errorContacto').innerHTML = texto;
      return false;
    }
    document.getElementById('errorContacto').innerHTML = '';
    return true;
  };
  
  const validarFactura = () => {
    let ordenTrabajo = document.getElementById('ordenTrabajo').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (
      ordenTrabajo === null ||
      ordenTrabajo === '' ||
      ordenTrabajo.length === 0
    ) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese un número de factura</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    }
    if (!expresion.test(ordenTrabajo)) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten números</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    }
    if (ordenTrabajo.length < 1) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El número tiene que ser mayor o igual a 3 caracteres numéricos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    }
    if (ordenTrabajo.length > 7) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El número tiene que ser menor o igual a 7 caracteres numéricos</span>';
      document.getElementById('errorOrdenTrabajo').innerHTML = texto;
      return false;
    }
    document.getElementById('errorOrdenTrabajo').innerHTML = '';
    return true;
  };
  
  const validarFechaCompra = () => {
    let fechaCompra = document.getElementById('fechaCompra').value;
    let texto;
    let fechaRegistro = document.getElementById('fechaRegistro').value;
  
    if (
      fechaCompra === null ||
      fechaCompra === '' ||
      fechaCompra.length === 0
    ) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de compra</span>';
      document.getElementById('errorFechaCompra').innerHTML = texto;
      return false;
    }
    if (fechaCompra > fechaRegistro) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser mayor a la fecha de registro</span>';
      document.getElementById('errorFechaCompra').innerHTML = texto;
      return false;
    }
    document.getElementById('errorFechaCompra').innerHTML = '';
    return true;
  };
  
  const validarFechaRegistro = () => {
    let fechaCompra = document.getElementById('fechaCompra').value;
    let texto;
    let fechaRegistro = document.getElementById('fechaRegistro').value;
  
    if (
      fechaRegistro === null ||
      fechaRegistro === '' ||
      fechaRegistro.length === 0
    ) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese la fecha de registro</span>';
      document.getElementById('errorFechaRegistro').innerHTML = texto;
      return false;
    }
    if (fechaCompra > fechaRegistro) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La fecha no puede ser menor a la fecha de compra</span>';
      document.getElementById('errorFechaRegistro').innerHTML = texto;
      return false;
    }
    document.getElementById('errorFechaRegistro').innerHTML = '';
    return true;
  };
  
  const validarValorTotal = () => {
    let valorTotal = document.getElementById('valorTotal').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (
      valorTotal === null ||
      valorTotal === '' ||
      valorTotal.length === 0
    ) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese el valor total</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    }
    if (!expresion.test(valorTotal)) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten números</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    }
    if (valorTotal <= 0) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">El valor total no puede ser menor o igual a 0</span>';
      document.getElementById('errorValorTotal').innerHTML = texto;
      return false;
    }
    document.getElementById('errorValorTotal').innerHTML = '';
    return true;
  };
  
  const validarCantidad = () => {
    let cantidad = document.getElementById('cantidad').value;
    let texto;
    let expresion = /[0-9]/;
  
    if (cantidad === null || cantidad === '' || cantidad.length === 0) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Ingrese una cantidad</span>';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    }
    if (!expresion.test(cantidad)) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Solo se permiten números</span>';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    }
    if (cantidad <= 0) {
      texto =
        '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">La cantidad no puede ser menor o igual a 0</span>';
      document.getElementById('errorCantidad').innerHTML = texto;
      return false;
    }
    document.getElementById('errorCantidad').innerHTML = '';
    return true;
  };
  
  const boton = document.querySelector('#formulario');
  
  boton.addEventListener('click', verificarFormulario);
  