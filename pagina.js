// Función para cambiar el color de fondo de la sección de características
function cambiarColor() {
    document.querySelector(".caracteristicas").style.backgroundColor = "#ccc";
  }
  
  // Evento para ejecutar la función al hacer clic en el botón
  document.querySelector(".caracteristicas button").addEventListener("click", cambiarColor);
  