export const checkQuantity=(event, productId, stock)=>{
     const cardElement=document.getElementById(`card${productId}`);

        const productQuantity=cardElement.querySelector('.product-quantity-value');


        let quantity=parseInt(productQuantity.getAttribute('data-quantity'))||1;
    
        if(event.target.className==='quantity-decrement-btn'){
            if(quantity>1){
                quantity-=1;
            }
        }

        if(event.target.className==='quantity-increment-btn'){
            if(quantity<stock){
                quantity+=1;
            }
            else if(quantity===stock){
                quantity=stock;
            }
        }
   
        productQuantity.innerText=quantity;
        productQuantity.setAttribute('data-quantity', quantity.toString());
        return quantity
       
}