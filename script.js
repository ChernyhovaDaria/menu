let isOpen = false
const memu = document.getElementById("menu")
const icon= document.getElementById("icon")

function openMenu () {
    
    if(isOpen){
        memu.style.display="none" 
        icon.style.backgroundImage ="url(https://st2.depositphotos.com/3905143/6174/v/950/depositphotos_61747587-stock-illustration-home-button-web-icon.jpg)"
        isOpen = false
    }else{ memu.style.display="flex" 
    icon.style.backgroundImage ="url(https://cdn-icons-png.flaticon.com/512/5244/5244832.png)"
    isOpen= true}
}


