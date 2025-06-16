// Let's build a cash register machine that can add register to a shopping cart, calculate total price, calculate discounts, and accept payment by cash.

// The currency is assumed in USD, so you don't need to add it to the program.

// The cash register has 3 register for sale:

// Phone for 300
// Smart TV for 220
// Gaming Console for 150
// There's a 10% discount when the total price is higher than 400.

// The cash register should have a shopping cart that starts empty.

// The cash register should provide a method called addItem that takes the name of an item as a parameter. When called, it should check if the item is available for sale. If it is, the item should be added to the shopping cart. If it is not available, show a message saying we don't sell that item.

// The cash register should provide a method called calculateTotalPrice that calculates the total price of all the items in the shopping cart. It should iterate over the items in the shopping cart and sum up their prices.

// The cash register should provide a method called pay that takes the payment amount as a parameter.

// It should calculate the total price of the items in the shopping cart using the calculateTotalPrice method. If the total price is higher than 400, a 10% discount should be applied.

// The method should then compare the payment amount with the total price (after applying the discount) and display an appropriate message:

// If the payment amount is equal to or greater than the total price, it should display a message thanking the customer for the purchase. If there is any change, it should also display the amount of change to be given.
// If the payment amount is less than the total price, it should display a message indicating that the customer does not have enough money to purchase the items.
// The program should include appropriate console.log() statements to display messages for adding items to the shopping cart, displaying the total price, and processing the payment.
// The program should handle scenarios where the customer's payment amount is exactly equal to the total price, as well as cases where the payment amount is greater or less than the total price.

// To build the program, you need to use what you've learned about objects, arrays, conditionals, and loops.

// I recommend that you try building the program yourself first. If you get stuck, then see the provided solution below. Good luck!

// const cashRegister = {
//     Phone: 300,
//     gamingConsole: 150,
//     smartTv: 220,
// }

// const cart = []

// cart.push("Phone");
// cart.push("Smart Tv");
// cart.push("Gaming console"

// In the question i am asked to create a scenerio where by a customer walks into a store with a cart, 
// then picks item from the register and then, 
// the cash register calculates all he's bought then tell him the price he needs to pay and also there is a 10% discount on all purchases over $400.
// What i need to do now is first create a Cash register with items in it, 
// After that i need to create an empty cart then find a way to add items to the cart.
//  And i also need to create a checker that will make sure the item is avsilable then add to cart but also make sure there would be warning if item is not available 
// After making my selection i need to create a function that can calculate the total cost of the items in the cart then and calculate the discounted price if the purchase is above $400.
// Also i need to create a payment function that accepts cash and only cash
// it should send a prompt if a string is inputted and should calculate change needed to be given, 
// it should also send a prompt if the oney paid is not enough


const cashRegister = {
    phone: 300,
    gamingConsole: 150,
    smartTv: 220,
}
const cart = []
function picker(register, item, cart){
    let order = {};
    for(key in register){

    if(key===item){
        order[key] = register[key]
        cart.push(order)
        break;
    }
    }


    if(!item){
        return "Products not available"
    }
console.log("order", order)
    return item;

}



function calculateTotalPrice( cart){
    let totalPrice = 0;


    for(key in cart){
console.log("The total price of your cart is:", totalPrice += cart[key])
if (totalPrice >= 670){
    totalPrice = totalPrice - (totalPrice * 0.1);
    console.log("You have a 10% discount on your purchse, your new discounted price is:", totalPrice);  
}
    }
}

function pay(paymentAmount, totalPrice) {
    console.log("paymentAmount", paymentAmount)
    if (paymentAmount >= totalPrice) {
        let change = paymentAmount - totalPrice;
        console.log(`Thank you for your purchase! Your change is $${change}.`);
    } else {
        console.log("You do not have enough money to purchase the items.");
    }
}


    

       // for(let i=0; i<cart.length; i++){
    //     // arr =  [300,150, 200]

    // }
    // function calculateDiscount(){
    //     let totalPrice = calculateTotalPrice(cart);
    //     if(totalPrice > 400){
    //         totalPrice * 0.9;
    //     }
    // }


    // add all items in 


    // return totalPrice;
 




console.log("Your have added: ", picker(cashRegister, "gamingConsole", cart) + " to the cart "  )
console.log("Your have added: ", picker(cashRegister, "phone", cart) + " to the cart "  )
console.log("Your have added: ", picker(cashRegister, "smartTv", cart) + " to the cart "  )
console.log("Your cart is now:", cart )
console.log("The total price of your cart is:", calculateTotalPrice(cashRegister))
console.log(pay(700, 603))


