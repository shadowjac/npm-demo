var fs = require('fs');
var resultado = fs.readFileSync("andres.txt");
console.log(resultado.toString());

var asyncResult = fs.readFile("andres.txt", function(err, data){
    if(err) throw err;
    console.log('***********');
    console.log(data.toString());
})