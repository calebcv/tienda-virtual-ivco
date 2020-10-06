
window.fbAsyncInit = function() {
    FB.init({
      appId      : '2897775743838475',
      cookie     : true,
      xfbml      : true,
      version    : 'v8.0'
    });
      
    FB.AppEvents.logPageView();   
    FB.getLoginStatus((response)=>
{
    if(response.authResponse)
    FB.api(
        `/me`,{locale:"es_MX",fields:'id,first_name,last_name,email,link,gender,locale,picture'},
        function(response) {
           console.log(response)
        }
      );
});
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  
function checkLoginState() {
    FB.getLoginStatus(function(response) {
      console.log(response);
    });
  }

  