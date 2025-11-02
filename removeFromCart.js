import { getDataFromLS } from "./getDataFromLS";
import { updateCartValue } from "./updateCart";
export const  removeFromCart=(id)=>{
    let cartItems =getDataFromLS();

    cartItems=cartItems.filter((currId)=>currId.productId!==id);

    localStorage.setItem('getProducts',JSON.stringify(cartItems));
    
    let removedDiv=document.querySelector(`#card${id}`);
    if(removedDiv){
        removedDiv.remove();
    }

    updateCartValue(cartItems);
};