"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var btn = document.getElementsByClassName("btn_append");
var articulos = document.getElementById("articulos");
var carrito;
var verificarCarrito = function () {
    var storage = localStorage.getItem("carrito");
    carrito = storage !== null ? JSON.parse(storage) : [];
    appendArticlesDom();
};
var appendProduct = function (e) {
    var _loop_1 = function (x) {
        if (e.target == btn[x]) {
            if (carrito.length == 0)
                carrito.push(__assign(__assign({}, productos[x]), { cantidad: 1 }));
            else {
                if (carrito.some(function (value, index) { return value.id == productos[x].id; }))
                    carrito.map(function (value, index) {
                        if (value.id == productos[x].id)
                            carrito[index].cantidad++;
                    });
                else {
                    carrito.push(__assign(__assign({}, productos[x]), { cantidad: 1 }));
                }
            }
        }
    };
    for (var x = 0; x < btn.length; x++) {
        _loop_1(x);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    appendArticlesDom();
};
var appendArticlesDom = function () {
    if (carrito.length > 0) {
        while (articulos === null || articulos === void 0 ? void 0 : articulos.firstChild) {
            articulos.removeChild(articulos.firstChild);
        }
        for (var _i = 0, carrito_1 = carrito; _i < carrito_1.length; _i++) {
            var value = carrito_1[_i];
            var newDivNameProd = document.createElement("div");
            newDivNameProd.className = "col-10";
            newDivNameProd.innerHTML = substrText(value.nombre_prod);
            var newDivCantProd = document.createElement("div");
            newDivCantProd.className = "col-2";
            newDivCantProd.innerHTML = value.cantidad;
            articulos === null || articulos === void 0 ? void 0 : articulos.appendChild(newDivNameProd);
            articulos === null || articulos === void 0 ? void 0 : articulos.appendChild(newDivCantProd);
        }
        var newBtnPagar = document.createElement("button");
        newBtnPagar.className = "col-auto mt-2 btn btn-success";
        newBtnPagar.setAttribute("type", "button");
        newBtnPagar.innerHTML = "Pagar Ahora";
        articulos === null || articulos === void 0 ? void 0 : articulos.appendChild(newBtnPagar);
    }
    else {
        while (articulos === null || articulos === void 0 ? void 0 : articulos.firstChild) {
            articulos.removeChild(articulos.firstChild);
        }
        var newPMsj = document.createElement("p");
        newPMsj.className = "m-0 col-12 p-0 text-center";
        newPMsj.innerHTML = "No hay articulos";
        articulos === null || articulos === void 0 ? void 0 : articulos.appendChild(newPMsj);
    }
};
var substrText = function (text) {
    if (text.length >= 12)
        return text.substring(0, 12) + "...";
    else
        return text;
};
var addEventBtn = function () {
    verificarCarrito();
    for (var x = 0; x < btn.length; x++) {
        btn[x].addEventListener("click", appendProduct, false);
    }
};
