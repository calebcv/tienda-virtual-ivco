(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['navbar'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "                <div class=\"col-2 d-flex justify-content-center\">\r\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"foto") || (depth0 != null ? lookupProperty(depth0,"foto") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"foto","hash":{},"data":data,"loc":{"start":{"line":32,"column":30},"end":{"line":32,"column":38}}}) : helper)))
    + "\" class=\"fluid\">\r\n                    <div class=\"cont-cuenta-nav position-absolute p-4\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <p class=\"text-center\">Usuario: "
    + alias4(((helper = (helper = lookupProperty(helpers,"usuario") || (depth0 != null ? lookupProperty(depth0,"usuario") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usuario","hash":{},"data":data,"loc":{"start":{"line":35,"column":60},"end":{"line":35,"column":71}}}) : helper)))
    + "</p>\r\n                            <div class=\"btn btn-primary\">\r\n                                <a class=\"text-white\" href=\"../pag/Login.html\">Ir a tu cuenta</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "                <div class=\"col-2 d-flex justify-content-center\">\r\n                    <i class=\"fas fa-user align-self-center\"></i>\r\n                    <div class=\"cont-cuenta-nav position-absolute p-4\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"btn btn-primary\">\r\n                                <a class=\"text-white\" href=\"../pag/Login.html\">Inicia Sesión</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n    <nav class=\"row justify-content-between align-items-center pl-4 pr-4\">\r\n        <div class=\"col-2\">\r\n            <img src=\"../img/logo-removebg-preview.png\" class=\"img-fluid\">\r\n        </div>\r\n        <div class=\"col-4 p-0\">\r\n            <div class=\"row m-0\">\r\n\r\n                <div class=\"flex-nowrap p-0 m-0 col-8\">\r\n                    <div class=\"row m-0\">\r\n                        <input id=\"search\" autocomplete=\"off\" placeholder=\"Buscar articulos\" class=\"form-control col-10\" type=\"text\" name=\"\">\r\n                        <button class=\"col-2 btn btn-primary\"><i class=\"fas fa-search\"></i></button>\r\n                        <div class=\"cont_search_res shadow-lg position-absolute\">\r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <input type=\"checkbox\" id=\"carrito\" class=\"d-none\">                \r\n                <label for=\"carrito\" role=\"button\" class=\"col-1 d-flex justify-content-center align-items-center m-0 p-0 mr-2\">\r\n                    <i class=\"fas fa-cart-arrow-down\"></i>\r\n                    <div class=\"cont_art_car position-absolute mt-1 shadow-lg\">\r\n                        <div class=\"sub_cont_art_car rounded\">\r\n                            <div id=\"articulos\" class=\"row justify-content-center\">\r\n                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"foto") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.program(3, data, 0),"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":53,"column":23}}})) != null ? stack1 : "")
    + "            </div>\r\n        </div>\r\n    </nav>\r\n    <div class=\"row justify-content-center\">\r\n        <div class=\"sliderheader col-10\">\r\n            <center>\r\n              <ul>\r\n                <li><img src=\"../img/fondoBanner7.JPG\" alt=\"\"></li>\r\n                <li><img src=\"../img/banner2_index.jpg\" alt=\"\"></li>\r\n                <li><img src=\"../img/banner3_index.jpg\" alt=\"\"></li>\r\n              </ul>\r\n            </center>\r\n          </div>\r\n    </div>\r\n\r\n    <div class=\"row justify-content-center mt-2\">\r\n        <div class=\"col-10\">\r\n            <div class=\"row justify-content-center p-0 pl-3 pr-3 align-items-stretch flex-nowrap\"> \r\n                <div role=\"button\" for=\"catalago\" class=\"option d-flex align-items-center justify-content-center m-0 col-2 mr-1\">\r\n                    <a href=\"./Catálogo.html\">CATALOGO</a>\r\n                    <div class=\"sub-menu position-absolute\">\r\n                        <li><a href=\"./Smartphone.html\">SMARTPHONE</a></li>\r\n                        <li><a href=\"./laptops.html\">LAPTOPS</a></li>\r\n                        <li><a href=\"./computadoras.html\">COMPUTADORAS</a></li>\r\n                        <li><a href=\"./impresoras.html\">IMPRESORAS</a></li>\r\n                        <li><a href=\"./accesorios.html\">ACCESORIOS</a></li>\r\n                        <li><a href=\"./software&antivirus.html\">SOFTWARE Y ANTIVIRUS</a></li>\r\n                    </div>\r\n                </div>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./Servicios.html\">SERVICIOS</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./FormasPago.html\">FORMAS DE PAGO</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./LaEmpresa.html\">LA EMPRESA</a></li>\r\n                <li class=\"option col-2 btn mr-1\"><a href=\"./Contactenos.html\">CONTACTENOS</a></li>\r\n                <li class=\"option col-2 btn d-flex align-items-center justify-content-center\"><a href=\"./Login.html\"><i class=\"fas fa-user mr-1\"></i>TU CUENTA</a></li>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n";
},"useData":true});
})();