document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const clearCartButton = document.getElementById('clear-cart');
    const buyNowButton = document.getElementById('buy-now');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Función para renderizar el carrito
    function renderCart() {
        cartContainer.innerHTML = ''; // Limpiar el contenedor del carrito
        let total = 0;

        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';

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

    // Función para actualizar la cantidad de un producto
    function updateQuantity(name, delta) {
        cart = cart.map(item => {
            if (item.name === name) {
                item.quantity += delta;
                // Si la cantidad es 0 o menor, eliminar el artículo del carrito
                if (item.quantity <= 0) {
                    return null;  // Marcamos para eliminar
                }
            }
            return item;
        }).filter(item => item !== null); // Filtramos los elementos marcados para eliminar
        
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Función para vaciar el carrito
    function clearCart() {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    // Función para manejar la compra
    function handleBuyNow() {
        const cartItems = document.querySelectorAll(".cart-item");
        let products = [];

        cartItems.forEach(item => {
            const productName = item.querySelector(".product p").innerText;
            const productQuantity = item.querySelector("input[type='number']").value;
            products.push({ name: productName, quantity: productQuantity });
        });

        const queryString = products.map(product => 
            `product=${encodeURIComponent(product.name)}&quantity=${product.quantity}`
        ).join("&");

        const paymentWindow = window.open(`/HTML/pago.html?${queryString}`, '_blank', 'width=800,height=600');
        if (paymentWindow) {
            paymentWindow.focus();
        } else {
            alert("Permite las ventanas emergentes para continuar.");
        }
    }

    // Event listeners
    cartContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('minus')) {
            updateQuantity(e.target.dataset.name, -1);
        } else if (e.target.classList.contains('plus')) {
            updateQuantity(e.target.dataset.name, 1);
        }
    });

    clearCartButton.addEventListener('click', clearCart);
    buyNowButton.addEventListener('click', handleBuyNow);

    // Renderizar el carrito al cargar la página
    renderCart();
});
