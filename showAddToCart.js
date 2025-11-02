import products from './api/products.json';
import { getDataFromLS } from './getDataFromLS';
import { removeFromCart } from './removeFromCart';

let cartItems =getDataFromLS();

let filteredProducts= products.filter((currPro)=>{
    return cartItems.some((currProd)=> currProd.productId===currPro.id);
});


const cartElement=document.querySelector('.productCartContainer');
const templateContainer=document.querySelector('.productCartTemplate');

const showCartProducts= ()=>{
    filteredProducts.forEach((products)=>{
    const {id,name,price,description,category,image}=products;
    let productClone=document.importNode(templateContainer.content,true);

    productClone.querySelector('.cart-item-category').textContent=category;
    productClone.querySelector('.cart-item-info img').src=image;
    productClone.querySelector('.cart-item-name').textContent=name;
    productClone.querySelector('.cart-item-price').textContent=`₹${price}`;
    productClone.querySelector('.quantity-value').textContent=cartItems.find((currId)=> currId.productId===id).quantity;
    productClone.querySelector('.product-old-price').textContent=`₹${price*4}`;
    productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

    productClone.querySelector(".cart-item-remove-btn").addEventListener('click', () => {
             removeFromCart(id);
          });
    cartElement.appendChild(productClone);
});
}

showCartProducts();