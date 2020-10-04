"use strict";
var productos;
var isVisible = false;
var getProductos = function (limit) {
    return fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/catalogo.php?tipo=impresora&limit=" + limit)
        .then(function (response) { return response.json(); })
        .catch(function (err) { return productos = err; });
};
var getDetails = function (id, limit) {
    return fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/impresora.php?id_producto=" + id + "&limit=" + limit)
        .then(function (response) { return response.json(); })
        .catch(function (err) { return productos = err; });
};
