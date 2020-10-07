"use strict";
var dataUser;
var contDataUser = document.getElementsByClassName("cont_dataUser");
var verificarDataUser = function () {
    if (localStorage.getItem("dataUser")) {
        dataUser = localStorage.getItem("dataUser");
        dataUser = JSON.parse(dataUser);
        insertDomDataUser();
    }
    else
        while (contDataUser[0].firstChild)
            contDataUser[0].removeChild(contDataUser[0].firstChild);
};
var insertDomDataUser = function () {
    var contDataUser = document.getElementsByClassName("cont_dataUser");
    var newDivPictureUser = document.createElement("img");
    newDivPictureUser.src = dataUser.picture.data.url;
    contDataUser[0].appendChild(newDivPictureUser);
};
