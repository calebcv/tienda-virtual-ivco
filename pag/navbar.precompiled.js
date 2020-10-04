(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "\r\n    <nav class=\"row justify-content-between align-items-center\">\r\n        <div class=\"col-2\">\r\n            <img src=\"../img/logo-removebg-preview.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-auto d-flex mr-5\">\r\n            <div class=\"row\">\r\n                <input type=\"checkbox\" id=\"carrito\" class=\"d-none\">\r\n                <label for=\"carrito\" role=\"button\" class=\"col-2 d-flex justify-content-center align-items-center m-0 p-0 mr-2\">\r\n                    <i class=\"fas fa-cart-arrow-down\"></i>\r\n                    <div class=\"cont_art_car position-absolute mt-1\">\r\n                        <div class=\"sub_cont_art_car rounded shadow-lg\">\r\n                            <div id=\"articulos\" class=\"row justify-content-center\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <div class=\"form-group form-inline flex-nowrap m-0 col-9\">\r\n                <input id=\"search\" autocomplete=\"off\" placeholder=\"Buscar articulos\" class=\"form-control\" type=\"text\" name=\"\">\r\n                <button class=\"btn btn-primary\"><i class=\"fas fa-search\"></i></button>\r\n                    <div class=\"cont_search_res shadow-lg position-absolute\">\r\n                        \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"sliderheader col-10\">\r\n            <center>\r\n              <ul>\r\n                <li><img src=\"../img/fondoBanner7.JPG\" alt=\"\"></li>\r\n                <li><img src=\"../img/banner2_index.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../img/banner3_index.jpg\" alt=\"\"></li>\r\n              </ul>\r\n            </center>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center mt-2\">\r\n        <div class=\"col-10\">\r\n            <div class=\"row justify-content-center p-0 pl-3 pr-3 align-items-stretch flex-nowrap\"> \r\n                <div role=\"button\" for=\"catalago\" class=\"option d-flex align-items-center justify-content-center m-0 col-2 mr-1\">\r\n                    <a href=\"./Catálogo.html\">CATALOGO</a>\r\n                    <div class=\"sub-menu position-absolute\">\r\n                        <li><a href=\"./Smartphone.html\">SMARTPHONE</a></li>\r\n                        <li><a href=\"./laptops.html\">LAPTOPS</a></li>\r\n                        <li><a href=\"./computadoras.html\">COMPUTADORAS</a></li>\r\n                        <li><a href=\"./impresoras.html\">IMPRESORAS</a></li>\r\n                        <li><a href=\"./accesorios.html\">ACCESORIOS</a></li>\r\n                        <li><a href=\"./software&antivirus.html\">SOFTWARE Y ANTIVIRUS</a></li>\r\n                    </div>\r\n                </div>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./Servicios.html\">SERVICIOS</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./FormasPago.html\">FORMAS DE PAGO</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./LaEmpresa.html\">LA EMPRESA</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./Contactenos.html\">CONTACTENOS</a></li>\r\n                <li class=\"option col-2 btn d-flex align-items-center justify-content-center\"><a href=\"./Login.html\"><i class=\"fas fa-user mr-1\"></i>TU CUENTA</a></li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n";
},"useData":true});
})();
var nav = Handlebars.templates.navbar;
    document.getElementById('nav').innerHTML = nav()