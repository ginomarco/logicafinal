// Datos de las rutinas
const routines = [
    { id: 1, name: "Rutina Básica", price: 50000 },
    { id: 2, name: "Rutina Intermedia", price: 80000 },
    { id: 3, name: "Rutina Avanzada", price: 120000 }
];

// Variables para el carrito
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartContainer = document.getElementById('cart-container');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

// Función para agregar una rutina al carrito
function addToCart(routineId) {
    const routine = routines.find(r => r.id === routineId);
    if (routine) {
        cart.push(routine);
        updateCart();
    }
}

// Actualizar el carrito
function updateCart() {
    // Actualizar el contador
    cartCountElement.textContent = cart.length;

    // Mostrar los ítems en el carrito
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItemsElement.appendChild(li);
    });

    // Actualizar el total
    cartTotalElement.textContent = total;
}

// Mostrar/Ocultar carrito al hacer clic en el icono
document.getElementById('cart-icon').addEventListener('click', () => {
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
});

// Confirmar compra
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert(`Total a pagar: $${cartTotalElement.textContent}`);
    cart = [];
    updateCart();
    cartContainer.style.display = 'none';
});

// Agregar evento a los botones de agregar
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', () => addToCart(parseInt(button.dataset.id)));
});document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        // Mostrar alerta si el carrito está vacío
        alert("El carrito está vacío. Agrega al menos una rutina antes de confirmar la compra.");
    } else {
        // Confirmar compra y mostrar total
        alert(`Total a pagar: $${cartTotalElement.textContent}`);
        cart = [];
        updateCart();
        cartContainer.style.display = 'none';
    }
});