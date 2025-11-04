import products from './api/products.json';
import { getDataFromLS } from './getDataFromLS';
import { IncDecmentQuantity } from './IncDecmentQuantity';
import { removeFromCart } from './removeFromCart';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartItems =getDataFromLS();

let filteredProducts= products.filter((currPro)=>{
    return cartItems.some((currProd)=> currProd.productId===currPro.id);
});


const cartElement=document.querySelector('.productCartContainer');
const templateContainer=document.querySelector('.productCartTemplate');

const showCartProducts= ()=>{
    filteredProducts.forEach((products)=>{
    const {id,name,price,stock,category,image}=products;
   let productClone = document.importNode(templateContainer.content, true);

    productClone.querySelector('.cart-item-category').textContent=category;
    productClone.querySelector('.cart-item-info img').src=image;
    productClone.querySelector('.cart-item-name').textContent=name;
   
    productClone.querySelector('.quantity-value').textContent=cartItems.find((currId)=> currId.productId===id).quantity;

    productClone.querySelector("#cardValue").setAttribute('id', `card${id}`);

    productClone.querySelector('.cart-item-quantity-group').addEventListener('click',(event)=>{
           IncDecmentQuantity(event,id,stock,price);
          
    });

    let totalPrice=cartItems.find((currP)=>currP.productId===id)
      productClone.querySelector('.cart-item-price').textContent=`₹${totalPrice.price}`;

          productClone.querySelector('.product-old-price').textContent=`₹${totalPrice.price*4}`;

    productClone.querySelector(".cart-item-remove-btn").addEventListener('click', () => {
             removeFromCart(id);
          });
    productClone.querySelector('.buy').addEventListener('click',()=>{
        console.log('fg')
    })
    cartElement.appendChild(productClone);
});
}

showCartProducts();

updateCartProductTotal();