(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['productos'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"row justify-content-center\">\r\n    <div class=\"col-10\">\r\n        <div class=\"row align-items-stretch\">\r\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"productos") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":6,"column":12},"end":{"line":21,"column":21}}})) != null ? stack1 : "")
    + "        </div>\r\n    </div>\r\n</div>\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "            <div class=\"col-3 mt-2 container-card\">\r\n                <div class=\"card\" style=\"width: 18rem;\">\r\n                    <img src=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"img") || (depth0 != null ? lookupProperty(depth0,"img") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"img","hash":{},"data":data,"loc":{"start":{"line":9,"column":30},"end":{"line":9,"column":37}}}) : helper)))
    + "\"  class=\"img-card img-fluid\" >\r\n                    <div class=\"card-body\">\r\n                    \r\n                    <h5 class=\"card-title text-center\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"nombre_prod") || (depth0 != null ? lookupProperty(depth0,"nombre_prod") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"nombre_prod","hash":{},"data":data,"loc":{"start":{"line":12,"column":55},"end":{"line":12,"column":70}}}) : helper)))
    + "</h5>\r\n                    \r\n                    <p class=\"text-center precio\">S/."
    + alias4(((helper = (helper = lookupProperty(helpers,"precio") || (depth0 != null ? lookupProperty(depth0,"precio") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"precio","hash":{},"data":data,"loc":{"start":{"line":14,"column":53},"end":{"line":14,"column":63}}}) : helper)))
    + "</p>\r\n                    <div class=\"row justify-content-center\">\r\n                    <button class=\"btn btn-primary\">Agregar al carrito</button>\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "\r\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"isVisible") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":0},"end":{"line":25,"column":7}}})) != null ? stack1 : "");
},"useData":true});
})();