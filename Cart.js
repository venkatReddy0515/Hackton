document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout-btn');
    
    let cart = [];

    // Function to update the cart display
    function updateCart() {
        // Clear current cart display
        cartItemsContainer.innerHTML = '';

        let totalPrice = 0;

        // Add each item to the cart and calculate the total price
        cart.forEach((item) => {
            totalPrice += item.price;

            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            
            cartItemDiv.innerHTML = `
                <img src="${item.img}" alt="${item.name}" style="width: 50px; height: 50px; margin-right: 10px;">
                <span>${item.name}</span>
                <h2>$${item.price.toFixed(2)}</h2>
            `;

            // Append the item to the cart container
            cartItemsContainer.appendChild(cartItemDiv);
        });

        // Update the total price in the cart
        cartTotal.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Add event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);
            const img = product.dataset.img;

            // Add the product to the cart array
            cart.push({ name, price, img });

            // Update the cart display
            updateCart();
        });
    });

    // Checkout button functionality (example)
    checkoutButton.addEventListener('click', () => {
        alert("Proceeding to checkout!");
    });
});
