"use strict";
Culqi.publicKey = 'sk_test_75a57d6472997a85';
var totalPagar=0;

if(localStorage.getItem("carrito"));
{
    
    totalPagar=JSON.parse(localStorage.getItem("carrito"));
    totalPagar.map(res=>totalPagar+=parseInt(res.precio));
    console.log(totalPagar)
    Culqi.settings({
    title: 'Culqi Store',
    currency: 'PEN',
    description: 'Productos',
    amount: totalPagar
    });
    Culqi.open();
    e.preventDefault();
}

$('#buyButton').on('click', function(e) {
    // Abre el formulario con la configuración en Culqi.settings
    
});

function culqi() {
    if (Culqi.token) { // ¡Objeto Token creado exitosamente!
        var token = Culqi.token.id;
        alert('Se ha creado un token:' + token);
        //En esta linea de codigo debemos enviar el "Culqi.token.id"
        //hacia tu servidor con Ajax
    } else { // ¡Hubo algún problema!
        // Mostramos JSON de objeto error en consola
        console.log(Culqi.error);
        alert(Culqi.error.user_message);
    }
  };