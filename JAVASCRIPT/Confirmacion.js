// Recuperar los detalles de la orden desde localStorage
const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

// Verificar si hay detalles de la orden almacenados
if (orderDetails) {
    const orderSummaryDiv = document.getElementById('order-summary');

    // Crear elementos HTML para mostrar los detalles
    const customerInfo = `
        <h2>Detalles del Cliente</h2>
        <p><strong>Nombre:</strong> ${orderDetails.name}</p>
        <p><strong>Correo Electrónico:</strong> ${orderDetails.email}</p>
        <p><strong>Dirección:</strong> ${orderDetails.address}</p>
        <p><strong>Método de Pago:</strong> ${orderDetails.paymentMethod}</p>
    `;

    let cartItems = '<h2>Productos Comprados</h2><ul>';
    orderDetails.cart.forEach(item => {
        cartItems += `
            <li>
                <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;">
                <strong>${item.name}</strong> - Cantidad: ${item.quantity} - Precio: $${item.price}
            </li>
        `;
    });
    cartItems += '</ul>';

    const total = orderDetails.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = total * 0.19; // 19% de IVA
    const subtotal = total - tax

    const orderTotals = `
        <h2>Resumen del Pedido</h2>
        <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
        <p><strong>IVA (19%):</strong> $${tax.toFixed(2)}</p>
        <p><strong>Total:</strong> $${total.toFixed(2)}</p>
    `;

    // Insertar el contenido generado en el contenedor
    orderSummaryDiv.innerHTML = customerInfo + cartItems + orderTotals;
} else {
    // Si no hay detalles de la orden, mostrar un mensaje
    document.getElementById('order-summary').innerHTML = '<p>No hay detalles de pedido para mostrar.</p>';
}