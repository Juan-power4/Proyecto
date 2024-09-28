// Carta.js
function scrollCarousel(id, distance) {
  document.getElementById(id).scrollBy({
    left: distance,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCart(product) {
    // Asegúrate de que 'name' coincide con lo que usa el carrito
    const existingItem = cart.find((item) => item.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Asigna eventos a los botones de "Añadir al carrito" después de renderizarlos en el DOM
  document.body.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
      const product = JSON.parse(e.target.getAttribute("data-product"));
      updateCart(product);
    }
  });
});
