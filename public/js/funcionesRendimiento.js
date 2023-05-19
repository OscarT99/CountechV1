verificarFormulario = () => {
    alert("Guardado correctamente");
    window.location.href = '/rendimiento'
}


const boton = document.querySelector('#formulario')
boton.addEventListener('click',verificarFormulario)