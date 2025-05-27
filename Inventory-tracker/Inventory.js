// Project: Simple inventory tracker
// Description: The program manages a small store's inventory of items.
//  It stores item details, checks if item is in stock, and calculates the total value of the inventory. 
// The program runs automatically, looping through items, applying conditionals to check stock, and suing functions to organize logic. 
// All output is printed to the console, showing the inventory status summary.

// Build the store or create the store
const myStore = ["milks", "eggs","coffee", "milo","chicken"]

console.log(myStore[0])

// create checker function to confirm if item is in store
// function declaration
// const checker = ()=>{

// }

// function definition
function checker(store, customerRequeust){
  let request;
  for(let i=0; i<store.length; i++){
      if(store[i]===customerRequeust){
        request = store[i];
        break;
      }
  }

  if(!request){
    return "Item not available"
  }

  return request;
}



// Begin business

// custoner invokes buyer that he wants to buy eggs

// Buyer tells abstract checker to find if eggs are in the store

// checker begins

console.log("Customer order is availble:", checker(myStore, "eggs"))


