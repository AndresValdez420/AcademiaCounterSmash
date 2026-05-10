const http = require("node:http");
const puerto = 3000;

const server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    switch(request.method){
        case "GET":
            if(request.url == "/obtener_personajes"){
                console.log("intento obtener personajes");
            }
        break;
        case "POST":
        break;
        case "PUT":
        break;
        case "DELETE":
        break;
    }
});

server.listen(puerto, () => {
    console.log("Servidor a la escucha en http://localhost:" + puerto);
});