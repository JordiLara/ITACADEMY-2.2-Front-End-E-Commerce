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
];

var cart = [];

var total = 0;

// Exercise 1

function buy(id) {

    let i = id - 1; 

    if (cart.includes(products[i])) { 
        products[i].amount += 1; 

    } else {

        products[i].amount = 1;
        cart.push(products[i]); 
    }

    console.log(cart);
    calculateTotal(); 
    applyPromotionsCart();
}

// Exercise 2

function cleanCart() {

    let emptyCart = confirm('Are you sure?');

    if (emptyCart) {
        cart.splice(0, cart.length); 
    }
    
    // cart = [];

    console.log(cart);
    printCart();
}

// Exercise 3

function calculateTotal() {

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

    var table = document.getElementById('ShoppingCartTable');
    var tbody = table.getElementsByTagName('tbody')[0];

    tbody.innerHTML = ''; 

    for (let item of cart) { 

        var row = tbody.insertRow();
        var cellName = row.insertCell();
        var insertPrice = row.insertCell(1);
        var insertAmount = row.insertCell(2);
        var insertTotal = row.insertCell(3);
        var modifyAmount = row.insertCell(4);

        cellName.textContent = item.name; 
        insertPrice.textContent = item.price + '$';
        insertAmount.textContent = item.amount;
        insertTotal.textContent = item.amount * item.price + '$';

        var addButton = document.createElement('button');

        addButton.textContent = '+';
        addButton.classList.add('button-add'); 
        addButton.addEventListener('click', function () { 
        
            buy(item.id);
            printCart();
        });

        var minusButton = document.createElement('button');

        minusButton.textContent = '-';
        minusButton.classList.add('button-minus'); 
        minusButton.addEventListener('click', function () { 
            
            removeFromCart(item.id);
            printCart();
        });

        modifyAmount.appendChild(minusButton);
        modifyAmount.appendChild(addButton);

        insertTotal.textContent = item.amount * item.price;
    }

    var total = calculateTotal();
    var totalPrice = document.getElementById('total_price');
    totalPrice.textContent = total;
    console.log(total);

    var discount = applyPromotionsCart();
    var totalDiscount = document.getElementById('total_discount');
    totalDiscount.textContent = discount.toFixed(2);
    console.log(discount);

    var finalPrice = document.getElementById('final_price');
    finalPrice.textContent = total - discount;
    console.log(finalPrice);
    
}


// ** Nivell II **

// Exercise 7

function removeFromCart(id) {

    let i = id - 1;

    if (cart.includes(products[i])) {

        if (products[i].amount > 1) {
            products[i].amount -= 1;

        } else {
            cart.splice(i, 1);
        }
    }

    console.log(products[id]);
    console.log(cart)
    calculateTotal()
}

function open_modal() {
    printCart();
}