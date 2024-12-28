document.addEventListener('DOMContentLoaded', () => {
    
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    let cart = [];

    function updateCart() {
        console.log("up")
    // Clear current cart display
        let totalPrice = 0;

    
        const div=document.createElement("div");
        
        cart.map((item)=>{
            div.innerHTML=`
            <img src="${item.img}">
            <span>${item.name}</span>
            <h2>${item.price}</h2>
            `
        })
        console.log(div);
        
        cartItemsContainer.appendChild(div);

        
        cartTotal.textContent = totalPrice.toFixed(2);
    }

    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product');
            const name = product.dataset.name;
            const price = parseFloat(product.dataset.price);
            const img = product.dataset.img;

            cart.push({ name, price, img });
            console.log(cart)
            updateCart();
        });
    });
});
