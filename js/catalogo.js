"use strict";
var productos;
var isVisible = false;
var getProductos = function (limit) {
    return fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/catalogo.php?tipo=categoria&limit=" + limit)
        .then(function (response) { return response.json(); })
        .catch(function (err) { return productos = err; });
};
getProductos(20)
    .then(function (res) { return console.log(res); });
