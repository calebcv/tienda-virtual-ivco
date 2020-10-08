(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['storageProd'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"row mt-4\">\r\n            <img class=\"col-2 img-fluid\" src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":6,"column":46},"end":{"line":6,"column":53}}}) : helper)))
    + "\">\r\n\r\n            </img>\r\n            <div class=\"col-3\">\r\n                <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"nombre_prod") || (depth0 != null ? lookupProperty(depth0,"nombre_prod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_prod","hash":{},"data":data,"loc":{"start":{"line":10,"column":19},"end":{"line":10,"column":34}}}) : helper)))
    + "</p>\r\n                <p>S/."
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":11,"column":22},"end":{"line":11,"column":32}}}) : helper)))
    + "</p>\r\n                <div class=\"row\">\r\n                    <button onclick=\"removeCantCarSection(this)\" class=\"circle-btn btn-menos-section btn btn-success p-0 m-0 rounded-circle\">-</button>\r\n                    <div class=\"col-2 text-center align-self-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cantidad") || (depth0 != null ? lookupProperty(depth0,"cantidad") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cantidad","hash":{},"data":data,"loc":{"start":{"line":14,"column":69},"end":{"line":14,"column":81}}}) : helper)))
    + "</div>\r\n                    <button onclick=\"addCantCarSection(this)\" class=\"circle-btn btn-mas-section btn btn-success p-0 m-0 rounded-circle\">+</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-3 d-flex justify-content-center align-items-center\">\r\n                <button onclick=\"removeProdMain(this)\" class=\"btn btn-danger btn-remove-item\">Eliminar</button>\r\n            </div>\r\n        </div>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    return "        <p class=\"text-center mt-3 mb-3\">No Hay Articulos en el carrito</p>\r\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "        <div class=\"row justify-content-center\">\r\n            <p id=\"textBtnPagoTunqui\" class=\"text-center col-12\">Total a pagar: S/."
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"total") || (depth0 != null ? lookupProperty(depth0,"total") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"total","hash":{},"data":data,"loc":{"start":{"line":27,"column":83},"end":{"line":27,"column":92}}}) : helper)))
    + "</p>\r\n            <button id=\"btnOpenCunqui\" class=\"btn btn-success\">\r\n                Pagar Ahora\r\n            </button>\r\n        </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {}), lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row justify-content-center\">\r\n    <div class=\"col-8\">\r\n        \r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"carrito") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":4,"column":8},"end":{"line":22,"column":17}}})) != null ? stack1 : "")
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"noArticle") : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data,"loc":{"start":{"line":23,"column":8},"end":{"line":32,"column":15}}})) != null ? stack1 : "")
    + "        \r\n    </div>\r\n</div>";
},"useData":true});
})();