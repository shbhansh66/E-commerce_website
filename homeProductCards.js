import { addToCart } from "./addToCart";
import { checkQuantity } from "./checkQuantity";

const productContainer = document.getElementById('productContainer');  // Assuming there's a container with this ID in your HTML
const productCardTemplate = document.getElementById('productCardTemplate'); // Assuming there's a template with this ID in your HTML  
export const showProductContainer = (products) => {
    if(!products){
        return false;
    }

    products.forEach((currElem) => {
     const {id, name, price, description, category, image,stock} = currElem;

     const productClone = document.importNode(productCardTemplate.content, true);

        productClone.querySelector(".product-name").textContent = name;

        productClone.querySelector(".product-category-tag").textContent = category;

        productClone.querySelector(".product-description").textContent = description;

        productClone.querySelector(".product-image-container img").src = image;

        productClone.querySelector(".product-rating").textContent = `Rating: ${currElem.rating} ⭐`;

        productClone.querySelector(".product-current-price").textContent = `₹${price}`; 

        productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

        
         productClone.querySelector(".product-old-price").textContent =`₹${price*4}`; 

        productClone.querySelector(".product-stock-count").textContent =`${stock}`;


        productClone.querySelector(".quantity-input-group").addEventListener('click', (event) => {
            checkQuantity(event, id, stock);
        });

          productClone.querySelector(".add-to-cart-btn").addEventListener('click', (event) => {
            addToCart(event, id, stock);
        });

          



        productContainer.appendChild(productClone);

    
        });
          
};