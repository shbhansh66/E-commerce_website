import { getDataFromLS } from "./getDataFromLS";
export const updateCartProductTotal=()=>{
    let cartItems =getDataFromLS();
let initial=0;
    let totalPrice=cartItems.reduce((accum,curr)=>{
      let productPrice=parseInt(curr.price)||0;
      return accum+productPrice;
    },initial);

    
    document.querySelector('.TotalValue').textContent=`₹${totalPrice}`;
   
  let discount=   document.querySelector('.discountValue').textContent=`- ₹${totalPrice/100}`;
    document.querySelector('.finalValue').textContent=`₹${totalPrice+50-totalPrice/100}`
}