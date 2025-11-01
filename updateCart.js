const cartValue=document.querySelector(".cart_count");
export const updateCartValue=(cartItems)=>{
    return cartValue.innerText=cartItems.length; 
}