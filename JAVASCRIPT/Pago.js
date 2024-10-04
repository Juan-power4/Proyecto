// Obtener los datos del carrito desde localStorage
const cart = JSON.parse(localStorage.getItem("cart")) || [];

// Asegurarse de que el total se guarda correctamente desde Carrito.js
let totalCalculated = parseFloat(localStorage.getItem("orderTotal")) || 0;

// Recalcular el total si no está disponible
if (!totalCalculated) {
  totalCalculated = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
}

// Función para mostrar los nombres de los platos y el total del pedido
function displayCartSummary() {
  const itemList = document.getElementById("item-list");
  const totalAmount = document.getElementById("total-amount");

  // Limpiar los elementos actuales del contenedor
  itemList.innerHTML = "";

  // Mostrar los nombres de los platos con la cantidad
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name} x${item.quantity}`; // Mostrar el nombre del plato con su cantidad
    itemList.appendChild(listItem);
  });

  // Mostrar el total ya calculado
  totalAmount.textContent = `Total del Pedido: $${totalCalculated.toLocaleString()}`;
}

// Ejecutar la función al cargar la página
document.addEventListener("DOMContentLoaded", displayCartSummary);

// Función para enviar el pedido al servicio web mediante POST
async function enviarPedido() {
  const orderDetails = {
    name: document.getElementById("name").value,
    phone: document.getElementById("telefono").value,
    email: document.getElementById("email").value,
    direction: document.getElementById("address").value,
    products: cart.map((item) => ({
      id: item.name, // Usar el nombre del plato como ID
      price: item.price, // Usar 'price' en lugar de 'precio' para consistencia
      quantity: item.quantity,
    })),
    totalPrice: totalCalculated,
  };

  // Guardar los detalles de la orden en localStorage para usarlos en confirmacion.js
  localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxN3xWYeWPY2ucmpg59qjGBG5dUIqeuuRMah8gCiCfFWsKM12S2Dru68dNGK_CRD9ml/exec",
      {
        method: "POST",
        redirect: "follow",
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
        },
        body: JSON.stringify(orderDetails),
      }
    );

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    alert("¡Pedido enviado correctamente!");
    window.location.href = "confirmacion.html";
  } catch (error) {
    console.error("Error al enviar el pedido:", error);
    }
    window.location.href = "confirmacion.html";
}

// Manejador para el envío del formulario
document
  .getElementById("payment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    enviarPedido();
  });
