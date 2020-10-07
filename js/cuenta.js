"use strict";
var dataUser;
var contDataUser = document.getElementsByClassName("cont_dataUser");
var verificarDataUser = function () {
    if (localStorage.getItem("userData")) {
        console.log("si hay storage");
        dataUser = localStorage.getItem("userData");
        dataUser = JSON.parse(dataUser);
        insertDomDataUser();
    }
    else {
        console.log("no hay storage");
        while (contDataUser[0].firstChild)
            contDataUser[0].removeChild(contDataUser[0].firstChild);
    }
};
var insertDomDataUser = function () {
    var newDivPictureUser = document.createElement("img");
    newDivPictureUser.src = dataUser.picture.data.url;
    contDataUser[0].appendChild(newDivPictureUser);
};
