//Duplicar cartas de personaje
const contenedor_cartas_personaje = document.querySelector("#contenedor-cartas-personaje");
const cartaPlantilla = document.querySelector(".carta-personaje");
cartaPlantilla.remove();

fetch("http://localhost:3000/obtener_personajes").then(recurso => recurso.json()).then(datos => {
    console.log(datos);
    for (i = 0; i < datos.personajes.length; i++) {
        const clon = cartaPlantilla.cloneNode(true);
        contenedor_cartas_personaje.appendChild(clon);


        //Rellenar datos de carta

        const namePersonaje = clon.querySelector(".name-personaje");
        namePersonaje.innerHTML = datos.personajes[i].name;

        const iconoSeriePersonaje = clon.querySelector(".iconoSerie-personaje");
        iconoSeriePersonaje.src = datos.personajes[i].seriesIcon;

        const renderPersonaje = clon.querySelector(".render-personaje");
        renderPersonaje.src = datos.personajes[i].render;

        clon.addEventListener("mouseover", () => {
            renderPersonaje.classList.add("hover");
            clon.classList.add("hover");
        });
        clon.addEventListener("mouseleave", () => {
            renderPersonaje.classList.remove("hover");
            clon.classList.remove("hover");
        });
    }
});











//nav menu hamburguesa
const menu_hamburguesa = document.querySelector("#menu-hamburguesa");
function desplegarMenuSeries() {
    menu_hamburguesa.classList.toggle("activo");
}
//footer menu hamburguesa
function desplegarMenuFooter(elemento) {
    //console.log(elemento);
    const columna = elemento.closest(".footer-columna");
    const menu = columna.querySelector(".cont-footer-personajes");
    menu.classList.toggle("activo");
}