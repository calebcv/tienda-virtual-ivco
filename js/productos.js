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
var btnMas = document.getElementsByClassName("btn-mas");
var btnMenos = document.getElementsByClassName("btn-menos");
var btnDelete = document.getElementsByClassName("btn-delete");
var articulos = document.getElementById("articulos");
var carrito;
var verificarCarrito = function () {
    var storage = localStorage.getItem("carrito");
    carrito = storage !== null ? JSON.parse(storage) : [];
    appendArticlesDom();
};
var addCantCar = function (e) {
    for (var x = 0; x < btnMas.length; x++) {
        if (e.target == btnMas[x]) {
            carrito[x].precio = carrito[x].precio / carrito[x].cantidad;
            carrito[x].cantidad++;
            carrito[x].precio = carrito[x].precio * carrito[x].cantidad;
            localStorage.setItem("carrito", JSON.stringify(carrito));
            appendArticlesDom();
        }
    }
};
var removeCantCar = function (e) {
    for (var x = 0; x < btnMenos.length; x++) {
        if (e.target == btnMenos[x]) {
            if (carrito[x].cantidad > 1) {
                carrito[x].precio = carrito[x].precio / carrito[x].cantidad;
                carrito[x].cantidad--;
                carrito[x].precio = carrito[x].precio * carrito[x].cantidad;
                localStorage.setItem("carrito", JSON.stringify(carrito));
                appendArticlesDom();
            }
        }
    }
};
var removeProdCar = function (e) {
    console.log("a");
    for (var x = 0; x < btnDelete.length; x++) {
        if (e.target == btnDelete[x]) {
            carrito.splice(x, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            appendArticlesDom();
        }
    }
};
var appendProduct = function (e) {
    var _loop_1 = function (x) {
        if (e.target == btn[x]) {
            if (carrito.length == 0)
                carrito.push(__assign(__assign({}, productos[x]), { cantidad: 1 }));
            else {
                if (carrito.some(function (value, index) { return value.id == productos[x].id; }))
                    carrito.map(function (value, index) {
                        if (value.id == productos[x].id) {
                            carrito[index].precio = carrito[index].precio / carrito[index].cantidad;
                            carrito[index].cantidad++;
                            carrito[index].precio = carrito[index].precio * carrito[index].cantidad;
                        }
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
    console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    appendArticlesDom();
};
var appendArticlesDom = function () {
    var _a;
    if (carrito.length > 0) {
        var cont_art_car = document.getElementsByClassName("cont_art_car")[0];
        cont_art_car.addEventListener("click", function (e) { e.preventDefault(); e.stopPropagation(); return false; });
        while (articulos === null || articulos === void 0 ? void 0 : articulos.firstChild) {
            articulos.removeChild(articulos.firstChild);
        }
        for (var _i = 0, carrito_1 = carrito; _i < carrito_1.length; _i++) {
            var value = carrito_1[_i];
            var newDivContainer = document.createElement("div");
            newDivContainer.className = "col-11 rounded border";
            var newRow = document.createElement("div");
            newRow.className = "row";
            var newImgProd = document.createElement("img");
            newImgProd.className = "col-3";
            newImgProd.src = value.img;
            var newDivContNamePrecioProd = document.createElement("div");
            newDivContNamePrecioProd.className = "col-6";
            var newRow3 = document.createElement("div");
            newRow3.className = "row";
            var newDivContNameProd = document.createElement("div");
            newDivContNameProd.className = "col-12";
            newDivContNameProd.innerHTML = substrText(value.nombre_prod);
            var newDivContPrecioProd = document.createElement("div");
            newDivContPrecioProd.className = "col-12";
            newDivContPrecioProd.innerHTML = "S/." + value.precio;
            var newDivDeleteProd = document.createElement("div");
            newDivDeleteProd.className = "col-3 d-flex align-items-center";
            var newBtnDeleteProd = document.createElement("btn");
            newBtnDeleteProd.className = "btn-delete btn btn-danger";
            newBtnDeleteProd.innerHTML = "Eliminar";
            newBtnDeleteProd.addEventListener("click", removeProdCar);
            var newContCantProd = document.createElement("div");
            newContCantProd.className = "col-12";
            var newRow2 = document.createElement("div");
            newRow2.className = "row justify-content-center pt-2 pb-2";
            var newBtnMenos = document.createElement("button");
            newBtnMenos.className = "circle-btn btn-menos btn btn-success p-0 m-0 rounded-circle";
            newBtnMenos.innerHTML = "-";
            newBtnMenos.addEventListener("click", removeCantCar);
            var newDivCantProd = document.createElement("div");
            newDivCantProd.className = "col-2 text-center align-self-center";
            newDivCantProd.innerHTML = value.cantidad;
            var newBtnMas = document.createElement("button");
            newBtnMas.className = "circle-btn btn-mas btn btn-success p-0 m-0 rounded-circle";
            newBtnMas.innerHTML = "+";
            newBtnMas.addEventListener("click", addCantCar);
            articulos === null || articulos === void 0 ? void 0 : articulos.appendChild(newDivContainer);
            newDivContainer.appendChild(newRow);
            newRow.appendChild(newImgProd);
            newRow.appendChild(newDivContNamePrecioProd);
            newDivContNamePrecioProd.appendChild(newRow3);
            newRow3.appendChild(newDivContNameProd);
            newRow3.appendChild(newDivContPrecioProd);
            newRow.appendChild(newDivDeleteProd);
            newDivDeleteProd.appendChild(newBtnDeleteProd);
            newRow.appendChild(newContCantProd);
            newContCantProd.appendChild(newRow2);
            newRow2.appendChild(newBtnMenos);
            newRow2.appendChild(newDivCantProd);
            newRow2.appendChild(newBtnMas);
        }
        var total_1 = 0;
        if (document.getElementsByClassName("total-pagar-info").length == 0) {
            var newRow = document.createElement("div");
            newRow.className = "row cont-Ptotal-btnPagar justify-content-center";
            var newPTotal = document.createElement("p");
            newPTotal.className = "total-pagar-info col-12 text-center m-0";
            var newBtnPagar = document.createElement("button");
            newBtnPagar.className = "col-auto btn-pagar mt-3 mb-3 btn btn-success";
            newBtnPagar.setAttribute("type", "button");
            newBtnPagar.innerHTML = "Pagar Ahora";
            newBtnPagar.addEventListener("click", function () { window.location.href = "../pag/pagar.html"; });
            cont_art_car.appendChild(newRow);
            newRow.appendChild(newPTotal);
            newRow.appendChild(newBtnPagar);
        }
        carrito.map(function (res) { return total_1 += parseInt(res.precio); });
        var totalPagar = document.getElementsByClassName("total-pagar-info");
        totalPagar[0].innerHTML = "Total a Pagar: S/." + total_1;
        console.log(total_1);
    }
    else {
        var contPTotalBtnPagar = document.getElementsByClassName("cont-Ptotal-btnPagar");
        while (articulos === null || articulos === void 0 ? void 0 : articulos.firstChild) {
            articulos.removeChild(articulos.firstChild);
        }
        while ((_a = contPTotalBtnPagar[0]) === null || _a === void 0 ? void 0 : _a.firstChild) {
            contPTotalBtnPagar[0].removeChild(contPTotalBtnPagar[0].firstChild);
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
