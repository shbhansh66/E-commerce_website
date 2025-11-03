import "./style.css";
export const showToast=(operation,id)=>{
    const toast =document.createElement("div");
    toast.classList.add("toast");
    toast.classList.add("show")


    if(operation==="add"){
        toast.textContent=`Product with ID ${id} has been added,`;

    }else{
        toast.textContent=`Product With ID ${id} has been deleted.`;
    }

    document.body.appendChild(toast);

    setTimeout(()=>{
        toast.remove();
    },2000);

}