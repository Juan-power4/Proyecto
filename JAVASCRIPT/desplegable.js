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

document.addEventListener('DOMContentLoaded', function() {
  renderCartItems();
});

function renderCartItems() {
  console.log("Renderizando elementos del carrito");
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const cartItemsContainer = document.getElementById('cart-items');

  cartItemsContainer.innerHTML = ''; // Limpiar contenido previo

  if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
  } else {
      cart.forEach((item, index) => {
          const itemElement = document.createElement('div');
          itemElement.classList.add('item');

          itemElement.innerHTML = `
              <div class="item-details">
                  <img src="${item.image}" alt="${item.name}">
                  <div>
                      <h2>${item.name}</h2>
                  </div>
              </div>
              <div class="item-price">
                  <p>${formatPrice(item.price * item.quantity)}</p>
                  <div class="quantity-control">
                      <button onclick="updateQuantity(${index}, -1)">-</button>
                      <span>${item.quantity}</span>
                      <button onclick="updateQuantity(${index}, 1)">+</button>
                  </div>
                  <a href="#" class="remove" onclick="removeItem(${index})">Eliminar</a>
              </div>
          `;
          cartItemsContainer.appendChild(itemElement);
      });

      updateSummary();
  }
}

function updateQuantity(index, delta) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart[index].quantity + delta > 0) {
      cart[index].quantity += delta;
  } else {
      cart.splice(index, 1); // Elimina el producto si la cantidad es 0
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems();
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCartItems();
}

function formatPrice(amount) {
  // Convierte el número a string y separa los enteros de los decimales
  const [integerPart, decimalPart] = amount.toFixed(2).split('.');
  
  // Agrega puntos como separadores de miles en la parte entera
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
  // Combina la parte entera y decimal con una coma como separador decimal
  return `$${formattedIntegerPart},${decimalPart}`;
}

function updateSummary() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  let taxes = total * 0.19;
  let subtotal = total - taxes;

  // Usa la función formatPrice para formatear los precios
  document.getElementById('subtotal').innerText = formatPrice(subtotal);
  document.getElementById('tax').innerText = formatPrice(taxes);
  document.getElementById('total').innerText = formatPrice(total);
}