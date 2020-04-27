
var themeTypeVal= '1';
graphsLabelsColor='#6C757D';
mapMarkerIcon=mapMarkerIconRed;
googleMapStyles=googleMapStanderedStyles;
bodyCutomScrollThemeClass="os-theme-dark";
cutomScrollThemeClassTyp1="os-theme-round-dark";

function setDayTheme(){
  themeTypeVal='1';
  $('.themeTypeElm').val('1');
  //$("#dayThemeCss").attr("disabled", "disabled");

  graphsLabelsColor='#6C757D';
  mapMarkerIcon=mapMarkerIconRed;
  googleMapStyles=googleMapStanderedStyles;
  bodyCutomScrollThemeClass="os-theme-dark"
  cutomScrollThemeClassTyp1="os-theme-round-dark"

  $("body").removeClass("body-light-theme");
  $("body").addClass("bg-white");

  $(".menu-img-thsw").attr("src","views/media/images/open-menu.svg");

  $(".main-header-thsw, .main-Sidebar-thsw").removeClass("navbar-dark");
  $(".main-header-thsw, .main-Sidebar-thsw").addClass("navbar-light");

  $(".brand-text-thsw").removeClass("brand-text-dark");
  $(".brand-text-thsw").addClass("brand-text-light");

  $(".nav-link").removeClass("text-white");
  $(".nav-link").addClass("text-secondary");

  $(".content-wrapper").removeClass("bg-dark-theme");
  $(".content-wrapper").addClass("bg-white");

  $(".card-header").removeClass("card-header-dark-theme");
  $(".card-header").addClass("bg-white");

  $(".card-body, .list-group-item-thsw").removeClass("card-dark-theme");
  $(".card-body, .list-group-item-thsw").addClass("bg-white");

  $(".control-sidebar-thsw").removeClass("bg-dark-theme");
  $(".control-sidebar-thsw").addClass("bg-white");

  $(".bot-header-thsw").removeClass("bg-dark-theme");
  $(".bot-header-thsw").addClass("bg-white");



}


function setNightTheme(){
  themeTypeVal='2';
  $('.themeTypeElm').val('2');
  //$("#nightThemeCss").removeAttr("disabled");

  graphsLabelsColor='white';
  mapMarkerIcon=mapMarkerIconBlue;
  googleMapStyles=googleMapDarkStyles;
  bodyCutomScrollThemeClass="os-theme-light"
  cutomScrollThemeClassTyp1="os-theme-round-light"

  $("body").addClass("body-light-theme");
  $("body").removeClass("bg-white");

  $(".menu-img-thsw").attr("src","views/media/images/menuWhite.svg");

  $(".main-header-thsw, .main-Sidebar-thsw").addClass("navbar-dark");
  $(".main-header-thsw, .main-Sidebar-thsw").removeClass("navbar-light");

  $(".brand-text-thsw").addClass("brand-text-dark");
  $(".brand-text-thsw").removeClass("brand-text-light");

  $(".nav-link").addClass("text-white");
  $(".nav-link").removeClass("text-secondary");

  $(".content-wrapper").addClass("bg-dark-theme");
  $(".content-wrapper").removeClass("bg-white");

  $(".card-header").addClass("card-header-dark-theme");
  $(".card-header").removeClass("bg-white");

  $(".card-body, .list-group-item-thsw").addClass("card-dark-theme");
  $(".card-body, .list-group-item-thsw").removeClass("bg-white");

  $(".control-sidebar-thsw").addClass("bg-dark-theme");
  $(".control-sidebar-thsw").removeClass("bg-white");

  $(".bot-header-thsw").addClass("bg-dark-theme");
  $(".bot-header-thsw").removeClass("bg-white");
}

$(document).ready(function(){
  $('body').on('click','.themeSwitchChkBox', function(){
    if($(".themeSwitchChkBox:checked").length){
    setNightTheme();
    //  location.replace("https://coronaindia.github.io/docs/indexNight.html")
    } else {
    setDayTheme();
      //location.replace("https://coronaindia.github.io/")
    }

  });
});
