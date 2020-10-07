
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
                          console.log(response);
                          if(response.authResponse)
                          getFBUserData();  
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
    verificarDataUser();
  })
}


function checkLoginState() 
{
    FB.getLoginStatus((response)=> 
                      {
                        console.log(response);
                          if(response.authResponse)
                          getFBUserData();  
                      });
}



  