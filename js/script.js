let iconMenu=document.querySelector(".icon-menu"),body=document.querySelector("body"),menuBody=document.querySelector(".header__content");iconMenu&&iconMenu.addEventListener("click",(function(){iconMenu.classList.toggle("active"),body.classList.toggle("lock"),menuBody.classList.toggle("active")}));