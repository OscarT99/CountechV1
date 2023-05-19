// Obtener los elementos del formulario
const formulario = document.getElementById('formulario');
const campoPedido = document.getElementById('pedido');
const campoOrdenTrabajo = document.getElementById('ordenTrabajo');
const campoFechaOrdenTrabajo = document.getElementById('fechaOrdenTrabajo');
const campoFechaEntregaOrden = document.getElementById('fechaEntregaOrden');
const campoFechaVenta = document.getElementById('fechaVenta');
const campoFechaRegistro = document.getElementById('fechaRegistro');
const campoValorTotal = document.getElementById('valorTotal');

// Agregar un controlador de eventos para el envío del formulario
formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evento) {
  evento.preventDefault(); // Evitar el envío del formulario por defecto

  // Validar cada campo según las condiciones especificadas

  // Verificar que ningún campo esté nulo, vacío o igual a 0
  if (
    campoPedido.value === null ||
    campoPedido.value === '' ||
    campoPedido.value === '0' ||
    campoOrdenTrabajo.value === null ||
    campoOrdenTrabajo.value === '' ||
    campoOrdenTrabajo.value === '0' ||
    campoFechaOrdenTrabajo.value === null ||
    campoFechaOrdenTrabajo.value === '' ||
    campoFechaEntregaOrden.value === null ||
    campoFechaEntregaOrden.value === '' ||
    campoFechaVenta.value === null ||
    campoFechaVenta.value === '' ||
    campoFechaRegistro.value === null ||
    campoFechaRegistro.value === '' ||
    campoValorTotal.value === null ||
    campoValorTotal.value === '' ||
    parseFloat(campoValorTotal.value) <= 0
  ) {
    alert('Por favor, completa todos los campos y asegúrate de que no sean nulos, vacíos o iguales a 0.');
    return;

    //texto = '<span style="color: #e6213f; padding: 3px;border-radius: 3px;">Por favor, completa todos los campos y asegúrate de que no sean nulos, vacíos o iguales a 0.</span   >';
      //document.getElementById('errorCamposVacios').innerHTML = texto;
      //return false;
  }

  // Validar que los campos de pedido y orden de trabajo solo contengan números
  const regexNumeros = /^[0-9]+$/;
  if (!regexNumeros.test(campoPedido.value) || !regexNumeros.test(campoOrdenTrabajo.value)) {
    alert('Por favor, ingresa solo números en los campos de pedido y orden de trabajo.');
    return;
  }

  // Validar la fecha de orden de trabajo
  const fechaOrdenTrabajo = new Date(campoFechaOrdenTrabajo.value);
  const fechaEntregaOrden = new Date(campoFechaEntregaOrden.value);
  const fechaVenta = new Date(campoFechaVenta.value);
  const fechaActual = new Date();

  if (fechaOrdenTrabajo >= fechaEntregaOrden || fechaOrdenTrabajo >= fechaVenta) {
    alert('La fecha de orden de trabajo debe ser inferior a la fecha de entrega de la orden y a la fecha de venta.');
    return;
  }

  // Validar la fecha de registro (debe ser igual a la fecha actual)
  const fechaRegistro = new Date(campoFechaRegistro.value);
  if (fechaRegistro.getTime() !== fechaActual.getTime()) {
    alert('La fecha de registro debe ser igual a la fecha actual.');
    return;
  }

  // Validar la fecha de venta (debe ser inferior o igual a la fecha actual)
  if (fechaVenta > fechaActual) {
    alert('La fecha de venta debe ser igual o inferior a la fecha actual.');
    return;
  }

  // Validar el valor total (no debe ser menor o igual a 0)
  if (parseFloat(campoValorTotal.value) <= 0) {
    alert('El valor total debe ser mayor que 0.');
    return;
  }

  // Si se pasaron todas las validaciones, se puede enviar el formulario
  formulario.submit();
}
