document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.querySelector('.cart');
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    const clearCartButton = document.getElementById('clear-cart');

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

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

    function clearCart() {
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    cartContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('minus')) {
            updateQuantity(e.target.dataset.name, -1);
        } else if (e.target.classList.contains('plus')) {
            updateQuantity(e.target.dataset.name, 1);
        }
    });

    clearCartButton.addEventListener('click', clearCart);

    renderCart();
});
