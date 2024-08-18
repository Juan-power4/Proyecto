document.addEventListener("DOMContentLoaded", function () {
  const stickyButton = document.querySelector(".sticky-button");
  const cartContainer = document.createElement("div");
  document.body.appendChild(cartContainer);

  // Función para cargar el contenido del desplegable
  function loadDesplegable() {
    fetch("/Html/Desplegable.html")
      .then((response) => response.text())
      .then((html) => {
        cartContainer.innerHTML = html;
        cartContainer.classList.add("cart-overlay");
        const closeButton = cartContainer.querySelector(".close-btn");
        closeButton.addEventListener("click", closeDesplegable);
      });
  }

    function toggleDesplegable() {
    const cartOverlay = document.querySelector(".cart-overlay");
    cartOverlay.classList.toggle("active");

    if (cartOverlay.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
    }


  // Función para cerrar el carrito
  function closeDesplegable() {
    cartContainer.classList.remove("active");
  }

  // Abrir el carrito al hacer clic en el botón
  stickyButton.addEventListener("click", function () {
    if (!cartContainer.innerHTML) {
      loadDesplegable();
    }
    toggleDesplegable();
  });

});
