function toggleDesplegable() {
  const sliderContainer = document.getElementById("slider-container");
  const overlay = document.getElementById("overlay");

  // Verifica el estado actual de display del slider y del overlay
  if (sliderContainer.style.display === "block") {
    sliderContainer.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Permitir scroll nuevamente
  } else {
    sliderContainer.style.display = "block";
    overlay.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevenir scroll en el fondo
  }
}
function finalizarCompra() {
  window.open("/Html/Carrito.html", "_blank");
}