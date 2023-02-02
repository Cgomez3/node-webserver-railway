 const http = require('http');
http.createServer((req, res)=>{

    //con esta configuracion de puede descargar un excel csv
    res.setHeader('Content-Disposition','attchment;filename=lista.csv');
    res.writeHead(200,{'Content-type':'application/csv'});

    persona ={
      id:1,
      nombre:'cristhian',
      apellido: 'gomez quispe'
    }


    res.write('id, nombre\n');
    res.write('1, juan\n');
    res.write('2, milagrs\n');
    res.write('3, mama\n');
    res.write('4, gi\n');
   
    res.write('Hola mundo');
    res.end();

}).listen(8080);


console.log('escuchando el puerto 8080')
