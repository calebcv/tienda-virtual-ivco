"use strict";
Culqi.publicKey = 'sk_test_75a57d6472997a85';

if(localStorage.getItem("carrito"))
{
    let totalPagar=0;
    const carrito=JSON.parse(localStorage.getItem("carrito"));
    carrito.map(res=>totalPagar=totalPagar+parseInt(res.precio));
    console.log(totalPagar)
    Culqi.settings({
    title: 'Culqi Store',
    currency: 'PEN',
    description: 'Productos',
    amount: totalPagar*100
    });
    
}

$('#btnOpenCunqui').on('click', function(e) {
    // Abre el formulario con la configuración en Culqi.settings
    Culqi.open();
    e.preventDefault();
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

  let removeProdMain=(e)=>
{
    const btnDelete2=document.getElementsByClassName("btn-remove-item");
    for(let x=0;x<btnDelete2.length;x++)
    {
        if(e==btnDelete2[x])
        {
            carrito.splice(x,1);
            localStorage.setItem("carrito",JSON.stringify(carrito));
            funcTemplate();
            verificarCarrito();
             
        }
    }
}
let addCantCarSection=(e)=>
{
    const btnMasSec=document.getElementsByClassName("btn-mas-section")
    for(let x=0;x<btnMasSec.length;x++)
    {
        if(e==btnMasSec[x])
        {
            carrito[x].precio=carrito[x].precio/carrito[x].cantidad;
            carrito[x].cantidad++;
            carrito[x].precio=carrito[x].precio*carrito[x].cantidad;
            localStorage.setItem("carrito",JSON.stringify(carrito));
            funcTemplate();
            appendArticlesDom();       
        }
    }
}
let removeCantCarSection=(e)=>
{
    const btnMenosSec=document.getElementsByClassName("btn-menos-section")

    for(let x=0;x<btnMenosSec.length;x++)
    {
        if(e==btnMenosSec[x])
        {
            if(carrito[x].cantidad>1)
            {
            carrito[x].precio=carrito[x].precio/carrito[x].cantidad;
            carrito[x].cantidad--;
            carrito[x].precio=carrito[x].precio*carrito[x].cantidad;
            localStorage.setItem("carrito",JSON.stringify(carrito));
            funcTemplate();
            appendArticlesDom();
            }
            
        }
    }
}
