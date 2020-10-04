"use strict";
var dato;
var input = document.getElementById("search");
var regex = new RegExp(/^[a-zA-Z1-9][a-zA-Z1-9]*/);
var cont_res = document.getElementsByClassName("cont_search_res");
var body = document.getElementsByTagName("body");
var mostrar = function (e) {
    cont_res[0].style.display = "block";
    e.stopPropagation();
};
var ocultar = function () {
    cont_res[0].style.display = "none";
};
input.addEventListener("click", mostrar);
body[0].addEventListener("click", ocultar);
var getSearch = function () {
    if (regex.test(input ? input.value : "")) {
        console.log(input ? input.value : "");
        fetch("https://hiddensoft.net/pruebasconsultas/tienda_ivco/search.php?search=" + (input === null || input === void 0 ? void 0 : input.value))
            .then(function (response) { return response.json(); })
            .then(function (res) { return addResSearchDom(res); })
            .catch(function (err) { return productos = err; });
    }
    else
        addResSearchDom([]);
};
var substrRes = function (text) {
    if (text.length >= 12)
        return text.substring(0, 17) + "...";
    else
        return text;
};
var addResSearchDom = function (res) {
    while (cont_res[0].firstChild) {
        cont_res[0].removeChild(cont_res[0].firstChild);
    }
    if (res.length > 0)
        for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
            var value = res_1[_i];
            var newPResSearch = document.createElement("p");
            newPResSearch.className = "res_search m-0 p-0 pl-2";
            newPResSearch.innerHTML = substrRes(value.nombre_prod);
            cont_res[0].appendChild(newPResSearch);
        }
    else {
        var newPResSearch = document.createElement("p");
        newPResSearch.className = "res_search m-0 p-0 pl-2";
        newPResSearch.innerHTML = "No hay resultados";
        cont_res[0].appendChild(newPResSearch);
    }
};
input === null || input === void 0 ? void 0 : input.addEventListener("keyup", getSearch);
