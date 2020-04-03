$(document).ready(function(){
  $('.themeSwitchChkBox').on('click', function(){
    if($(".themeSwitchChkBox:checked").length){
      location.replace("https://coronaindia.github.io/indexNight.html")
    } else {
      location.replace("https://coronaindia.github.io/")
    }

  });
});
