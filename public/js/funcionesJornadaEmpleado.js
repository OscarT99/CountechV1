verificarFormulario = () => {
        alert("Guardado correctamente");
        window.location.href = '/produccion'
}


const boton = document.querySelector('#formulario')
boton.addEventListener('click',verificarFormulario)