/*Q)
Scenario:

You are tasked with creating an Inventory Management System for a grocery store. 
The store tracks grocery products, and each product has properties like name, quantity, 
price, and category. The categories include "Fruits", "Vegetables", "Dairy", "Bakery", etc.
The store manager needs to perform tasks such as adding new items, updating quantities when stock changes,
removing products, and calculating the total inventory value.

Requirements:
Create an object for each product with the following properties:

name: The name of the grocery product (e.g., "Apple", "Milk").
quantity: The number of items available in stock.
price: The price per unit of the product.
category: The category of the product (e.g., "Fruits", "Vegetables", "Dairy", etc.).
Write functions for:

Adding a product: The function should add a new product to the inventory or update the quantity if the product already exists.
Removing a product: The function should allow a product to be removed from the inventory using its name. If the product doesn't exist, display an error message.
Updating product quantity: This function should allow you to increase or decrease the quantity of a product. Ensure that the quantity can't go below zero.
Displaying total inventory value: Calculate and display the total value of the inventory by summing up each product’s quantity * price.

*/

let inventory = [];
let removed = [];

function additem(name, quantity, price, category) {
  inventory.push({
    name: name,
    quantity: quantity,
    price: price,
    category: category,
  });
}
additem("apple", 20, 200, "fruits");
additem("grapes", 220, 60, "fruits");
additem("Mango", 20, 150, "fruits");

additem("Card", 20, 200, "dairy");
additem("Milk", 220, 60, "dairy");
additem("Butter", 20, 150, "dairy");

additem("Tomato", 20, 20, "vegetables");
additem("onion", 220, 30, "vegetables");
additem("carrots", 20, 50, "vegetables");

function removeditem(pname) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name == pname) {
      removed = inventory.slice(i, i + 1);
      inventory[i] = null;
    }
  }
}
removeditem("Butter");
console.log("Removed Items = ", removed);
console.log("My Inventory = ", inventory);
