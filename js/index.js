//nav menu hamburguesa
const menu_hamburguesa = document.querySelector("#menu-hamburguesa");
function desplegarMenuSeries(){
    menu_hamburguesa.classList.toggle("activo");
}
//footer menu hamburguesa
function desplegarMenuFooter(elemento){
    //console.log(elemento);
    const columna = elemento.closest(".footer-columna");
    const menu = columna.querySelector(".cont-footer-personajes");
    menu.classList.toggle("activo");
}