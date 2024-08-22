// Simulación de obtener los datos del carrito desde localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

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

// Mostrar en consola la orden guardada para confirmación
window.addEventListener('load', function() {
    const savedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (savedOrderDetails) {
        console.log('Detalles de la orden guardados:', savedOrderDetails);
    }
});