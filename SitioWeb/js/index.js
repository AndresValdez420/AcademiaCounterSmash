//Duplicar cartas de personaje
const contenedor_cartas_personaje = document.querySelector("#contenedor-cartas-personaje");
const cartaPlantilla = document.querySelector(".carta-personaje");
cartaPlantilla.remove();

var arreglo_series = [];

const menu_hamburguesa = document.querySelector("#menu-hamburguesa");
const burgerPlantilla = document.querySelector("#plantilla-burger-options");
burgerPlantilla.remove();

fetch("http://localhost:3000/obtener_personajes").then(recurso => recurso.json()).then(datos => {
    //console.log(datos);
    for (i = 0; i < datos.personajes.length; i++) {
        const clon = cartaPlantilla.cloneNode(true);
        contenedor_cartas_personaje.appendChild(clon);


        //Rellenar datos de carta
        const namePersonaje = clon.querySelector(".name-personaje");
        namePersonaje.innerHTML = datos.personajes[i].name;

        clon.dataset.serie = datos.personajes[i].series;

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

        //Rellenar datos burger-menu
        if (!arreglo_series.some(serie => serie.nombre == datos.personajes[i].series)) {

            arreglo_series.push({
                nombre: datos.personajes[i].series,
                icono: datos.personajes[i].seriesIcon
            });
        }
    }
    crearBurgerMenu();
});

//nav menu hamburguesa
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
function crearBurgerMenu() {
    for (i = 0; i < arreglo_series.length; i++) {
        const clonBurger = burgerPlantilla.cloneNode(true);
        menu_hamburguesa.appendChild(clonBurger);

        const iconoSerieBurger = clonBurger.querySelector("img");
        iconoSerieBurger.src = arreglo_series[i].icono;

        const namesSeriesBurger = clonBurger.querySelector("p");
        namesSeriesBurger.innerHTML = arreglo_series[i].nombre;
    }
};

//funcionalidad busqueda por caracteres
const searchBar = document.querySelector("#search-bar input");

searchBar.addEventListener("input", () => {
    const textoBusqueda = searchBar.value.toLowerCase();
    for (let i = 0; i < contenedor_cartas_personaje.children.length; i++) {
        const carta = contenedor_cartas_personaje.children[i];
        const nombre = carta.querySelector(".name-personaje").textContent.toLowerCase();
        if (nombre.includes(textoBusqueda) || textoBusqueda == "") {
            carta.style.display = "flex";
        }
        else {
            carta.style.display = "none";
        }
    }
});

//funcionalidad busqueda por series
function clicSeries(serie) {
    searchBar.value = "";
    desplegarMenuSeries();
    if (serie == "todos") {
        for (let i = 0; i < contenedor_cartas_personaje.children.length; i++) {
            const carta = contenedor_cartas_personaje.children[i];
            carta.style.display = "flex";
        }
    }
    else {
        const serieNombre = serie.querySelector("p").textContent;
        for (let i = 0; i < contenedor_cartas_personaje.children.length; i++) {
            const carta = contenedor_cartas_personaje.children[i];
            const cartaSerie = carta.dataset.serie;
            if (cartaSerie == serieNombre || serie == "todos") {
                carta.style.display = "flex";
            }
            else {
                carta.style.display = "none";
            }
        }
    }

}