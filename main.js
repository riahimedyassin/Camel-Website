let myItems=document.querySelectorAll(".listItem");
var myContainers=document.querySelector(".containerContent")

window.onscroll=()=> {
    if (window.scrollY>400) {
        myContainers.classList.add("container-right")
        let nb=0;
        const inter = setInterval(()=> {
            myItems[nb].classList.add("active")
            nb++; 
            nb>2 ? clearInterval(inter): inter
        },500); 
        
    }
    else {
        myItems.forEach(el=> {
            el.classList.remove("active"); 
            myContainers.classList.remove("container-right")
        })
    }

    
    
}

        




 







