"use strict";
var dataUser;
var contDataUser = document.getElementsByClassName("cont_dataUser");
var titleForm = document.getElementsByClassName("title-form");
var verificarDataUser = function () {
    if (localStorage.getItem("userData")) {
        console.log("si hay storage");
        dataUser = localStorage.getItem("userData");
        dataUser = JSON.parse(dataUser);
        insertDomDataUser();
    }
    else {
        console.log("no hay storage");
        titleForm[0].innerHTML = "Iniciar Sesión";
        while (contDataUser[0].firstChild)
            contDataUser[0].removeChild(contDataUser[0].firstChild);
    }
};
var insertDomDataUser = function () {
    titleForm[0].innerHTML = "Tu cuenta";
    var newDivPictureUser = document.createElement("img");
    newDivPictureUser.className = "img-fluid col-2";
    newDivPictureUser.src = dataUser.picture.data.url;
    var newContData = document.createElement("div");
    newContData.className = "col-8";
    var newPName = document.createElement("p");
    newPName.innerHTML = "Nombre: " + dataUser.first_name + " " + dataUser.last_name;
    var newPEmail = document.createElement("p");
    newPName.innerHTML = "Email: " + dataUser.email;
    var newPID = document.createElement("p");
    newPName.innerHTML = "ID: " + dataUser.id;
    contDataUser[0].appendChild(newDivPictureUser);
    contDataUser[0].appendChild(newContData);
    newContData.appendChild(newPName);
    newContData.appendChild(newPEmail);
    newContData.appendChild(newPID);
};
