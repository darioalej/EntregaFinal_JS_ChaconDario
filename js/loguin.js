let usuario1 = {          
    nombre: "Dario",
    apellido: "Chacon",
    usuario: "dac2912",
    contraseña: "perrito",
    email: "darioale@hotmail.com",
}

let usuario2 = {
    nombre: "Mario",
    apellido: "Bross",
    usuario: "SuperMario",
    contraseña:"KoopaTropa23",
    email: "cupatropa@hotmail.com",
}

// Convertimos los objetos de usuario a texto JSON para almacenarlos en el localStorage
let usuario1_texto = JSON.stringify(usuario1);
let usuario2_texto = JSON.stringify(usuario2);

// Guardamos los usuarios en el localStorage
localStorage.setItem('usuario1', usuario1_texto);
localStorage.setItem('usuario2', usuario2_texto);

// Event listener para el formulario de login
document.querySelector("#login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores ingresados por el usuario
    let nombre_usuario = document.querySelector("#usuario").value.trim();
    let contraseña = document.querySelector("#pass").value;

    // Obtener los usuarios almacenados en el localStorage
    let usuario1_guardado = JSON.parse(localStorage.getItem('usuario1'));
    let usuario2_guardado = JSON.parse(localStorage.getItem('usuario2'));

    // Verificar si el usuario y contraseña coinciden con alguno de los usuarios guardados
    if ((nombre_usuario === usuario1_guardado.usuario && contraseña === usuario1_guardado.contraseña) || 
        (nombre_usuario === usuario2_guardado.usuario && contraseña === usuario2_guardado.contraseña)) {
        mostrarMensajeBienvenida(nombre_usuario);
        document.getElementById('juegos').style.display ="block"; // Mostrar la sección de juegos
        document.getElementById('boton-mostrar-juegos').style.display = 'block'; // Mostrar el botón para mostrar los juegos
        document.getElementById('login-form').reset(); // Limpiar el formulario después de iniciar sesión
    } else {
        // No hacer nada si la verificación de usuario y contraseña falla
    }
});

// Event listener para el botón para cerrar sesión en caso que no quiera jugar 
document.getElementById('boton-mostrar-juegos').addEventListener('click', function() {
    document.getElementById('juegos').style.display = "none"; // Ocultar la sección de juegos
    document.getElementById('boton-mostrar-juegos').style.display = 'none'; // Ocultar el botón de cerrar sesión
    document.getElementById('mensaje-bienvenida').style.display = 'none'; // Ocultar el mensaje de bienvenida
});

// Función para mostrar un mensaje de bienvenida
function mostrarMensajeBienvenida(nombreUsuario) {
    let mensajeBienvenida = document.querySelector("#mensaje-bienvenida");
    mensajeBienvenida.textContent = "¡Bienvenido, " + nombreUsuario + ". Haz click en uno de estos 2 juegos y diviértete!";
    mensajeBienvenida.style.display = "block";
}

// Event listener para activar la función leer al presionar enter
document.querySelector("#pass").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        // Prevenir el envío del formulario al presionar Enter
        e.preventDefault();
        // Simular el clic en el botón de ingreso
        document.querySelector('.ingreso').click();
    }
});