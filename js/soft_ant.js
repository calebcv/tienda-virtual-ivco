"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productos;
var isVisible = false;
var getProductos = function (limit) {
    return fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/catalogo.php?tipo=software y antivirus&limit=" + limit)
        .then(function (response) { return response.json(); })
        .catch(function (err) { return productos = err; });
};
var getDetails = function (id, limit) {
    return fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/software_y_antivirus.php?id_producto=" + id + "&limit=" + limit)
        .then(function (response) { return response.json(); })
        .catch(function (err) { return productos = err; });
};
