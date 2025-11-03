import { getDataFromLS } from "./getDataFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCart";
import { updateCartProductTotal } from "./updateCartProductTotal";
export const  removeFromCart=(id)=>{
    let cartItems =getDataFromLS();

    cartItems=cartItems.filter((currId)=>currId.productId!==id);

    localStorage.setItem('getProducts',JSON.stringify(cartItems));
    
    let removedDiv=document.querySelector(`#card${id}`);
    if(removedDiv){
        removedDiv.remove();
        showToast("Delete",id);
    }


    updateCartValue(cartItems);
     updateCartProductTotal();
};