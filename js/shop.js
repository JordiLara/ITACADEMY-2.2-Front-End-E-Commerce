// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional.

var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.

var cart = [];

var total = 0;

// Exercise 1

function buy(id) {

    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array

    let i = id - 1; // Indicates 'less one' to avoid 0 at the index

    if (cart.includes(products[i])) { 
        products[i].amount += 1; // If the cart already have a product of this kind, add plus one.

    } else {

        products[i].amount = 1;
        cart.push(products[i]); // Add the desired product to the cart by the id button.
    }

    console.log(cart);
    calculateTotal(); // Once an item its added at the cart, calls this function to get the total price.
    applyPromotionsCart();
}

// Exercise 2

function cleanCart() {

    let emptyCart = confirm('Are you sure?');

    if (emptyCart) {
        cart.splice(0, cart.length); // Delete all items inside the shop cart if confirmed
    }
    
    // cart = [];

    console.log(cart);
}

// Exercise 3

function calculateTotal() {

    // Calculate total price of the cart using the "cartList" array

    let totalPrice = 0;

    cart.forEach(products => {
        totalPrice += products.price * products.amount;
    });
    console.log('total Price', totalPrice);
    return totalPrice;

    /*let totalPrice = 0

    for (let i = 0; i < cart.length; i++) {
        totalPrice += (cart[i].amount * cart[i].price);
    }
    console.log('total Price', totalPrice);*/
}

// Exercise 4

function applyPromotionsCart() {

    // Apply promotions to each item in the array "cart"

    let promoDiscounts = 0;
    var indexPromoProducts = [];

    indexPromoProducts = cart.reduce((accumulator, products, index) => {
        if (products.offer) {
            accumulator.push(index);
        }
        return accumulator;
    }, []);

    for (let i = 0; i < indexPromoProducts.length; i++) {
        if (cart[indexPromoProducts[i]].amount >= cart[indexPromoProducts[i]].offer.number) {
            promoDiscounts += cart[indexPromoProducts[i]].price * cart[indexPromoProducts[i]].amount * (cart[indexPromoProducts[i]].offer.percent / 100);
        }
    }

    console.log('discount', promoDiscounts.toFixed(2));
    return promoDiscounts;  
}

// Exercise 5

function printCart() {

    // Fill the shopping cart modal manipulating the shopping cart dom

    var table = document.getElementById('ShoppingCartTable');
    var tbody = table.getElementsByTagName('tbody')[0];

    tbody.innerHTML = ''; 

    for (let item of cart) { // When added a new item at the cart, new cell and row will be created and insert the desired parameters for each one.

        var row = tbody.insertRow();
        var cellName = row.insertCell();
        var insertPrice = row.insertCell(1);
        var insertAmount = row.insertCell(2);
        var insertTotal = row.insertCell(3);
        
        // Get the different types of data requested

        cellName.textContent = item.name; 
        insertPrice.textContent = item.price;
        insertAmount.textContent = item.amount;
        insertTotal.textContent = item.amount * item.price;
        
    }

    // calculate the total price of the items purchased.

    var total = calculateTotal();
    var totalPrice = document.getElementById('total_price');
    totalPrice.textContent = total;
    console.log(total);

    // applies the total amount of discounts.

    var discount = applyPromotionsCart();
    var totalDiscount = document.getElementById('total_discount');
    totalDiscount.textContent = discount.toFixed(2);
    console.log(discount);

    // gives the final price once the discount its applied.

    var finalPrice = document.getElementById('final_price');
    finalPrice.textContent = total - discount;
    console.log(finalPrice);
    
}


// ** Nivell II **

// Exercise 7

function removeFromCart(id) {

}

function open_modal() {
    printCart();
}