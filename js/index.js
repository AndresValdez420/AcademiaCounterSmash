//Duplicar cartas de personaje
const contenedor_cartas_personaje = document.querySelector("#contenedor-cartas-personaje");
const confesionPlantilla = document.querySelector(".carta-personaje");

fetch("http://localhost:3000/obtener_personajes")











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