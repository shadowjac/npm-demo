function destacar(mensaje){
    console.log(mensaje);
    console.log(repetir('-', mensaje.length));
};

function repetir(caracter, num){
    return new Array(num + 1).join(caracter);
}

module.exports = {
    destacar: destacar,
    repetir: repetir
};

// exports.destacar = destacar;
// exports.repetir = repetir;