//Duplicar cartas de personaje
const contenedor_cartas_personaje = document.querySelector("#contenedor-cartas-personaje");
const cartaPlantilla = document.querySelector(".carta-personaje");

fetch("http://localhost:3000/obtener_personajes").then(recurso => recurso.json()).then(personajes => {
    console.log(personajes);
    for(i = 0; i < personajes.length; i++){
        console.log("testeo");
        const clon = cartaPlantilla.cloneNode(true);
        contenedor_cartas_personaje.appendChild(clon);

        //Rellenar datos de carta

    }
});











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