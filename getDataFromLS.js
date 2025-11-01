import { updateCartValue } from "./updateCart";

export const getDataFromLS=()=>{
    let getdata=localStorage.getItem('getProducts');
    if(!getdata){
        return [];
    }   
     
    getdata=JSON.parse(getdata);
    updateCartValue(getdata);
        return getdata;

}