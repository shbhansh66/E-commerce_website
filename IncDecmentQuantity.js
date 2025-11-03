import { getDataFromLS } from "./getDataFromLS";
import { updateCartProductTotal } from "./updateCartProductTotal";


export const IncDecmentQuantity = (event, id, stock, unitPrice) => {
    
    // 1. Initialize data
    let cartItems = getDataFromLS();
    const prodContainer = document.querySelector(`#card${id}`);
    
    if (!prodContainer) return; 

    const prodQuantityElem = prodContainer.querySelector(".quantity-value");
    const prodPriceElem = prodContainer.querySelector(".cart-item-price");
    
  
    let existingItem = cartItems.find((currElem) => currElem.productId === id); 
    
    let currentQuantity = existingItem ? existingItem.quantity : 1;
    
    // --- 3. Update Quantity ---
    
    if (event.target.className.includes("incre")) {
        if (currentQuantity < stock) {
            currentQuantity += 1;
        }
    }

    if (event.target.className.includes("decre")) {
        if (currentQuantity > 1) {
            currentQuantity -= 1;
        }
    }

    // --- 4. Recalculate New Price ---
    // The 'unitPrice' is passed into the function.
    const newTotalPrice = Number(unitPrice) * currentQuantity;

    // --- 5. Prepare Updated Item and Update Array ---
    
    const updatedCartItem = { 
        // We use 'id' for the value, but the property name MUST match the LS structure
        productId: id, 
        quantity: currentQuantity, 
        price: newTotalPrice 
    };

    //  FIX: The .map() method now correctly replaces the old item
    // It checks against the 'productId' property.
    const newCartItems = cartItems.map((item) => {
        if (item.productId === id) { 
            return updatedCartItem;
        }
        return item;
    });

    // --- 6. Update Local Storage and UI ---
    
    localStorage.setItem('getProducts', JSON.stringify(newCartItems)); 
    
    // Update the HTML quantity and price
    prodContainer.querySelector('.product-old-price').textContent=`₹${newTotalPrice.toFixed(2)*4}`;
    prodQuantityElem.textContent = currentQuantity;
    prodPriceElem.textContent = `₹${newTotalPrice.toFixed(2)}`;
    // updateCartTotal(); 
    updateCartProductTotal();
}