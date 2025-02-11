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
 // inventory


    // [  {Name:"Apple", Quantity:45, Price:100, Categories:"fruits"},
    //  {Name:"Mango", Quantity:34, Price:50 , Categories:"fruits"}],

    //   [{Name:"Milk", Quantity:10,Price:30, Categories:"dairy"},
    //    {Name:"Card", Quantity:20,Price:40, Categories:"dairy"}]
    let inventory=[];

 function additem(iname, iquantity, iprice,icategories){
    inventory.push({
        Name:iname,
        Quantity:iquantity,
        Price:iprice,
        categories:icategories,
    })
 }
 additem("Banana", 34 ,60, "fruits");
 additem("Mango", 34 ,100, "fruits");
 additem("Card", 34 ,15, "dairy");
 additem("Milk", 34 ,36, "dairy");
 additem("Apple", 34 ,130, "fruits");
 console.log("My Inventory",inventory);


 function removeitem(category, productName) {
    if (inventory[category]) {
        const productIndex = inventory[category].findIndex(product => product.Name === productName);
        if (productIndex !== -1) {
            inventory[category].splice(productIndex, 1);
            console.log(`${productName} has been removed from the ${category} category.`);
        } else {
            console.log(`Error: ${productName} not found in the ${category} category.`);
        }
    } else {
        console.log(`Error: Category ${category} does not exist.`);
    }
}
 removeitem("fruits", "Apple");
console.log(inventory);





// let exproduct =product.filter((ex) => {
//     if(ex.expireDate< new Date (25,1,7)){
//         return "Expire product";
//     }
// });
// console.log("expire product =", exproduct);

