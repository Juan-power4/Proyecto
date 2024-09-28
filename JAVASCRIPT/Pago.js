// Obtener los datos del carrito desde localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Asegurarse de que el total se guarda correctamente desde Carrito.js
// Revisar si el total está correctamente almacenado, si no, recalcular como solución temporal
let totalCalculated = parseFloat(localStorage.getItem('orderTotal')) || 0;

if (!totalCalculated) {
    // Recalcular el total si no está disponible
    totalCalculated = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

// Función para mostrar los nombres de los platos y el total del pedido
function displayCartSummary() {
    const itemList = document.getElementById('item-list');
    const totalAmount = document.getElementById('total-amount');

    // Limpiar los elementos actuales del contenedor
    itemList.innerHTML = '';

     // Mostrar los nombres de los platos con la cantidad
     cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity}`; // Mostrar el nombre del plato con su cantidad
        itemList.appendChild(listItem);
    });

    // Mostrar el total ya calculado
    totalAmount.textContent = `Total del Pedido: $${totalCalculated.toLocaleString()}`;
}

// Ejecutar la función al cargar la página
document.addEventListener('DOMContentLoaded', displayCartSummary);

// Función para manejar el envío del formulario
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const orderDetails = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        paymentMethod: document.getElementById('payment-method').value,
        cart: cart
    };

    // Guardar la información de la orden en localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Redirigir a una página de confirmación
    window.location.href = 'confirmacion.html';
});
