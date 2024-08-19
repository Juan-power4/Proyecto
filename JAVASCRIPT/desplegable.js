function toggleDesplegable() {
  const container = document.getElementById("desplegable-container");

  // Verifica si el contenido ya está cargado
  if (container.innerHTML.trim() === "") {
    // Carga el contenido de Desplegable.html si aún no se ha cargado
    fetch("/Html/Desplegable.html")
      .then((response) => response.text())
      .then((data) => {
        container.innerHTML = data;
        container.style.display = "block";
      })
      .catch((error) =>
        console.error("Error al cargar el desplegable:", error)
      );
  } else {
    // Si ya está cargado, alterna la visibilidad
    if (container.style.display === "none" || container.style.display === "") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  }
}
