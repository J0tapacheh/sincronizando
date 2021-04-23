/*
const math = require('./math.js'); //modulo que se encuentran en la carpeta es llamado con "./" y se guarda en una constante

console.log(math);

console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divide(1,2));
*/

/*
const os = require ('os'); //modulo que viene en nodejs, no requiere ser llamado con "./", permite hacer funciones relacionadas con el sistema operativo

console.log(os.platform()); //se llama de la manera os.funcionDeOS
console.log(os.release());
console.log('free mem: ', os.freemem());
console.log('Total men: ', os.totalmem())
*/

/*
//modulo que permite interactuar con archivos, creando y leer archivos nuevos
const fs = require('fs');

//codigo asincrono: manda al SO a crear un archivo mientras sigue leyendo las lineas posteriores de la funcion
fs.writeFile('./texto.txt', 'ASDF', function(err) {
    if (err){
        console.log(err);
    }

    console.log('Archivo creado');
});

console.log('ultima linea de codigo');
//con esto nodejs solo ocupa tiempo leyendo los codigos, mientras que manda al SO a realizar otras funciones


fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
*/


const http = require('http');

/*
//funcion crear servidor con http
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'}); //200 es el mensaje de que todo esta bien, y ademas se le da mas informacion como el tipo de contenido
    res.write('<h1>Hola Mundo jeje xd<h1>');
    res.end();
}).listen(3000); //puerto del localhost
//al inspeccionar elemento, en network, sale informacion que se ha dado
//Para refrescar la pagina para cambiar la informacion, se debe cancelar enm servidor por consola presionando CTRL + C 2 veces
*/

/*
//por ejemplo al dar un texto plano tipo plain
http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/plain'}); //200 es el mensaje de que todo esta bien, y ademas se le da mas informacion como el tipo de contenido
    res.write('holaholahola');
    res.end();
}).listen(3000);
//si al poner 404 en vez de 200, el recurso que pide el navegador no existe, pero aun sigue mostrando el texto ya que asi se quizo que muestre el comentario
*/

//otra manera de abrir un servidor usando una constante tipo server
const handleServer = function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Hola Mundo jeje xd<h1>');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
});