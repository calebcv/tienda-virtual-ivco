
window.fbAsyncInit = ()=> 
{
    FB.init({
      appId      : '2897775743838475',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();

    FB.getLoginStatus((response)=>
                      {
                          statusChangeCallback(response)
                      });
};

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  
function getFBUserData()
{
  FB.api('/me',{locale:'es_ES',fields:"id,first_name,last_name,email,link,gender,locale,picture"},
  (res)=>
  {
    localStorage.setItem("userData",JSON.stringify(res));
    console.log(res);
    verificarDataUser();
    const contBtnSocial=document.getElementsByClassName("cont_btnSocial")

    while(contBtnSocial[0].firstChild)
    contBtnSocial[0].removeChild(contBtnSocial[0].firstChild);

    newBtnlogout=document.createElement("div");
    newBtnlogout.className="fb-login-button"
    newBtnlogout.addEventListener("click",logout);
    newBtnlogout.innerHTML="Cerrar Sesion";

    contBtnSocial[0].appendChild(newBtnlogout);
  })
}


function checkLoginState() 
{
    FB.getLoginStatus((response)=> 
                      {
                        statusChangeCallback(response);
                      });
}

function statusChangeCallback(response) {     
  console.log(response)             
  if (response.status === 'connected') {  
    getFBUserData();
    
  } 
}

let logout=()=>
{
  FB.logout(res=>
    {
      console.log(res);
      localStorage.removeItem("userData");
      verificarDataUser();
      location.reload();
    });
}



  