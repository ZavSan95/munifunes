document.addEventListener("DOMContentLoaded", (event) =>{
    
    //Seleccionar mis dos elementos principales
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let menu_mobile = document.querySelector(".menu-mobile");

    const mostrarOcultarMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            menu_mobile.classList.remove("menu-mobile--show");
        }else{
            menu_mobile.classList.add("menu-mobile--show");
        }
    }

    //Al dar click al boton menu mostrar el menu de navegación responsive
    mobile_btn.addEventListener("click", mostrarOcultarMenu);

    //Al redimensionar la pantalla por encima de 1000px se oculta el menu
    window.addEventListener("resize", () =>{
        let window_width = parseInt(document.body.clientWidth);

        if (window_width >= 1000){
            menu_mobile.classList.remove("menu-mobile--show");
        }
    })

    //Poder cerrar el menu con el boton X
    let btn_close = document.querySelector(".menu-mobile__close")

    btn_close.addEventListener("click", mostrarOcultarMenu);

    //Desplegar submenus
    let menu_item = document.querySelectorAll(".menu-mobile__item");
    
    menu_item.forEach(item => {
        item.addEventListener("click", (event) => {
            let submenu = item.lastElementChild;

            if (submenu.className === "menu-mobile__submenu-mobile") {
                if (submenu.style.display === "block") {
                    submenu.style.display = "none";
                } else {
                    submenu.style.display = "block";
                }
            }
            
        })
    })

})