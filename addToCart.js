import { getDataFromLS } from "./getDataFromLS";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCart";
getDataFromLS();
export const addToCart=(event, productId, stock)=>{

    const addtoLS=getDataFromLS();

     const cardElement=document.getElementById(`card${productId}`);
     
     let quantity=cardElement.querySelector(".product-quantity-value").innerText;

     let price=cardElement.querySelector(".product-current-price").innerText;
   
     price=price.replace('₹','');

     let exitcart=addtoLS.find((currId)=>currId.productId===productId);

     if(exitcart && quantity>1){
        quantity=Number(exitcart.quantity)+Number(quantity);
        price=Number(price)*Number(quantity);

        let updatedCart={productId,quantity,price};

       updatedCart= addtoLS.map((currElem)=>{
            return currElem.productId===productId?updatedCart:currElem;
        });

        localStorage.setItem('getProducts',JSON.stringify(updatedCart));
     }

     if(exitcart){
        return false;
     }
      

     price=Number(price*quantity);
     quantity=Number(quantity);
     
     addtoLS.push({productId,quantity,price});

     localStorage.setItem('getProducts',JSON.stringify(addtoLS));
 
     updateCartValue(addtoLS);

}