
  var themeTypeVal= $('.themeTypeElm').val();

  if(themeTypeVal=='1'){
    graphsLabelsColor='#6C757D';
    mapMarkerIcon=mapMarkerIconRed;
    googleMapStyles=googleMapStanderedStyles;
    bodyCutomScrollThemeClass="os-theme-dark"
    cutomScrollThemeClassTyp1="os-theme-round-dark"
  } else if (themeTypeVal=='2') {
    graphsLabelsColor='white';
    mapMarkerIcon=mapMarkerIconBlue;
    googleMapStyles=googleMapDarkStyles;
    bodyCutomScrollThemeClass="os-theme-light"
    cutomScrollThemeClassTyp1="os-theme-round-light"
  } else {
    graphsLabelsColor='#6C757D';
    mapMarkerIcon=mapMarkerIconRed;
    googleMapStyles=googleMapStanderedStyles;
    bodyCutomScrollThemeClass="os-theme-dark"
    cutomScrollThemeClassTyp1="os-theme-round-dark"
  }



$(document).ready(function(){
  $('body').on('click','.themeSwitchChkBox', function(){
    if($(".themeSwitchChkBox:checked").length){
      location.replace("https://coronaindia.github.io/indexNight.html")
    } else {
      location.replace("https://coronaindia.github.io/")
    }

  });
});
