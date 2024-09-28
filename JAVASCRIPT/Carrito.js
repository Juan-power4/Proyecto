// Carrito.js
document.addEventListener("DOMContentLoaded", () => {
  const cartContainer = document.querySelector(".cart");
  const subtotalEl = document.getElementById("subtotal");
  const taxEl = document.getElementById("tax");
  const totalEl = document.getElementById("total");
  const clearCartButton = document.getElementById("clear-cart");
  const buyNowButton = document.getElementById("buy-now");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Renderiza los elementos del carrito
  function renderCart() {
    cartContainer.innerHTML = ""; // Limpiar el contenedor del carrito
    let total = 0;

    if (cart.length === 0) {
      buyNowButton.style.display = "none"; // Oculta el botón si el carrito está vacío
    } else {
      buyNowButton.style.display = "block"; // Muestra el botón si hay productos
    }

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";

      cartItem.innerHTML = `
                <div class="product">
                    <img src="${item.image}" alt="${item.name}">
                    <p>${item.name}</p>
                </div>
                <div class="quantity-container">
                    <button class="minus" data-name="${item.name}">-</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button class="plus" data-name="${item.name}">+</button>
                </div>
                <div class="price-container">
                    <p>$${(item.price * item.quantity).toLocaleString()}</p>
                </div>
            `;

      cartContainer.appendChild(cartItem);
      total += item.price * item.quantity;
    });

    const tax = total * 0.19;
    const subtotal = total - tax;

    subtotalEl.textContent = `$${subtotal.toLocaleString()}`;
    taxEl.textContent = `$${tax.toLocaleString()}`;
    totalEl.textContent = `$${total.toLocaleString()}`;
  }

  // Actualiza la cantidad de un producto
  function updateQuantity(name, delta) {
    cart = cart
      .map((item) => {
        if (item.name === name) {
          item.quantity += delta;
          if (item.quantity <= 0) {
            return null; // Marca para eliminar
          }
        }
        return item;
      })
      .filter((item) => item !== null); // Filtra los elementos marcados para eliminar

    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  // Vacía el carrito
  function clearCart() {
    cart = [];
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
  }

  // Maneja la compra
  function handleBuyNow() {
    const cartItems = document.querySelectorAll(".cart-item");
    let products = [];

    cartItems.forEach((item) => {
      const productName = item.querySelector(".product p").innerText;
      const productQuantity = item.querySelector("input[type='number']").value;
      products.push({ name: productName, quantity: productQuantity });
    });

    const queryString = products
      .map(
        (product) =>
          `product=${encodeURIComponent(product.name)}&quantity=${
            product.quantity
          }`
      )
      .join("&");

    const paymentWindow = window.open(
      `/HTML/pago.html?${queryString}`,
      "_blank",
      "width=800,height=600"
    );
    if (paymentWindow) {
      paymentWindow.focus();
    } else {
      alert("Permite las ventanas emergentes para continuar.");
    }
  }

  // Listeners
  cartContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("minus")) {
      updateQuantity(e.target.dataset.name, -1);
    } else if (e.target.classList.contains("plus")) {
      updateQuantity(e.target.dataset.name, 1);
    }
  });

  clearCartButton.addEventListener("click", clearCart);
  buyNowButton.addEventListener("click", handleBuyNow);

  renderCart();
});
