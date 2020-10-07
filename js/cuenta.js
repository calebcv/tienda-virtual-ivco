"use strict";
var dataUser;
var contDataUser = document.getElementsByClassName("cont_dataUser");
var verificarDataUser = function () {
    while (contDataUser[0].firstChild)
            contDataUser[0].removeChild(contDataUser[0].firstChild);
    if (localStorage.getItem("userData")) {
        console.log("si hay storage");
        dataUser = localStorage.getItem("userData");
        dataUser = JSON.parse(dataUser);
        insertDomDataUser();
    }
};
var insertDomDataUser = function () {
    var newDivPictureUser = document.createElement("img");
    newDivPictureUser.className = "img-fluid col-2";
    newDivPictureUser.src = dataUser.picture.data.url;
    var newContData = document.createElement("div");
    newContData.className = "col-8";
    var newPName = document.createElement("p");
    newPName.innerHTML = "Nombre: " + dataUser.first_name + " " + dataUser.last_name;
    var newPEmail = document.createElement("p");
    newPEmail.innerHTML = "Email: " + dataUser.email;
    var newPID = document.createElement("p");
    newPID.innerHTML = "ID: " + dataUser.id;
    contDataUser[0].appendChild(newDivPictureUser);
    contDataUser[0].appendChild(newContData);
    newContData.appendChild(newPName);
    newContData.appendChild(newPEmail);
    newContData.appendChild(newPID);
};
