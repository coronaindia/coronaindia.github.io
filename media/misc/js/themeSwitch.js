
  var themeTypeVal= $('.themeTypeElm').val();

  if(themeTypeVal=='1'){
    graphsLabelsColor='#6C757D';
    mapMarkerIcon=mapMarkerIconRed;
    googleMapStyles=googleMapStanderedStyles;
  } else if (themeTypeVal=='2') {
    graphsLabelsColor='white';
    mapMarkerIcon=mapMarkerIconBlue;
    googleMapStyles=googleMapDarkStyles;
  } else {
    graphsLabelsColor='#6C757D';
    mapMarkerIcon=mapMarkerIconRed;
    googleMapStyles=googleMapStanderedStyles;
  }



$(document).ready(function(){
  $('.themeSwitchChkBox').on('click', function(){
    if($(".themeSwitchChkBox:checked").length){
      location.replace("https://coronaindia.github.io/indexNight.html")
    } else {
      location.replace("https://coronaindia.github.io/")
    }

  });
});
