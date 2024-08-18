// Array para almacenar los productos en el carrito
let cart = [];

function addToCart(nombre, precio) {
    // Obtener el carrito actual del localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Agregar el nuevo producto al carrito
    cart.push({ nombre, precio, cantidad: 1 });

    // Guardar el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${nombre} ha sido agregado al carrito.`);
}

// Carrito.js

// Función para cargar y mostrar los productos en el carrito
function loadCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContainer = document.getElementById('cart-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Tu carrito está vacío.</p>';
        return;
    }

    cartContainer.innerHTML = ''; // Limpiar el contenido previo

    cart.forEach((item, index) => {
        let productRow = document.createElement('div');
        productRow.classList.add('cart-item');
        productRow.innerHTML = `
            <p>${item.nombre}</p>
            <p>$${item.precio}</p>
            <p>
                <button onclick="updateQuantity(${index}, -1)">-</button>
                ${item.cantidad}
                <button onclick="updateQuantity(${index}, 1)">+</button>
            </p>
            <p>$${(item.precio * item.cantidad).toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartContainer.appendChild(productRow);
    });

    calculateTotal(); // Calcula y muestra el total del carrito
}

// Función para actualizar la cantidad de un producto
function updateQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].cantidad + change > 0) {
        cart[index].cantidad += change;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1); // Eliminar el producto en el índice dado
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart();
}

// Función para calcular el total del carrito
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    let totalElement = document.createElement('div');
    totalElement.classList.add('cart-total');
    totalElement.innerHTML = `<strong>Total: $${total.toFixed(2)}</strong>`;
    document.getElementById('cart-container').appendChild(totalElement);
}

// Cargar el carrito cuando la página se carga
document.addEventListener('DOMContentLoaded', loadCart);
