let myItems=document.querySelectorAll(".listItem");

function addClass (el)  {
    el.classList.add("active")
}
window.onscroll=()=> {
    if (window.scrollY>400) {
        let nb=0;
        setInterval(()=> {
            myItems[nb].classList.add("active")
            nb++
        },1000)
    }
    else {
        myItems.forEach(el=> {
            el.classList.remove("active")
        })
    }
    
}

        




 







