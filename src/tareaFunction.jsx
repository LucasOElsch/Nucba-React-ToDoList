
function crearTarea() {
    const tarea = document.getElementById('inputText').value;
    const lista = document.getElementById('lista');
    const tareaCreada = document.createElement('li');
    tareaCreada.textContent = tarea;
    tareaCreada.setAttribute('id', 'tarea');
    lista.appendChild(tareaCreada)

    if (tarea === ' ') {
        alert("Ingrese una tarea");
    }

    //boton eliminar
    const boton = document.createElement('button');
    boton.setAttribute('id', 'boton')
    boton.textContent = 'Eliminar'
    tareaCreada.appendChild(boton);

    //eliminar Tarea
    boton.onclick = () => tareaCreada.remove();

    document.getElementById('inputText').value = ' ';
}




export default crearTarea