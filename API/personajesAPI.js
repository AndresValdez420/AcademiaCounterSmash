const http = require("node:http");
const fs = require("node:fs");
const puerto = 3000;

var objeto_personajes;

fs.readFile("./personajes.json", (err, archivo) => {
    objeto_personajes = JSON.parse(archivo.toString());
})

const server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    switch(request.method){
        case "GET":
            if(request.url == "/obtener_personajes"){
                console.log(objeto_personajes);
                response.statusCode = 200;
                response.setHeader("Content-Type", "application/json");
                response.end(JSON.stringify(objeto_personajes));
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