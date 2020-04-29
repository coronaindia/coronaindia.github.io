
var themeTypeVal= '1';
graphsLabelsColor='#6C757D';
amInnerColumnLabelsColor ='#000000';
mapMarkerIcon=mapMarkerIconRed;
googleMapStyles=googleMapStanderedStyles;
bodyCutomScrollThemeClass="os-theme-dark";
cutomScrollThemeClassTyp1="os-theme-round-dark";

function setDayTheme(){
  themeTypeVal='1';
  $('.themeTypeElm').val('1');
  //$("#dayThemeCss").attr("disabled", "disabled");

  graphsLabelsColor='#6C757D';
  amInnerColumnLabelsColor ='#000000';
  mapMarkerIcon=mapMarkerIconRed;
  googleMapStyles=googleMapStanderedStyles;
  bodyCutomScrollThemeClass="os-theme-dark"
  cutomScrollThemeClassTyp1="os-theme-round-dark"
  if(bodyOverlayScrollbarsInstances!=null)
  bodyOverlayScrollbarsInstances.options({ className : bodyCutomScrollThemeClass });
  if(divOverlayScrollbarsInstances!=null && divOverlayScrollbarsInstances.length>0)
  $.each(divOverlayScrollbarsInstances, function (index, instance){
    instance.options({ className : cutomScrollThemeClassTyp1 });
  })

  $("body").removeClass("body-light-theme");
  $("body").addClass("bg-white");

  $(".menu-thsw").removeClass("text-light");
  $(".menu-thsw").addClass("text-danger");

  $(".users-list-name-thsw").removeClass("text-light");
  $(".users-list-name-thsw").addClass("text-dark");

  $(".main-header-thsw, .main-Sidebar-thsw, .main-footer").removeClass("navbar-dark");
  $(".main-header-thsw, .main-Sidebar-thsw, .main-footer").addClass("navbar-light");

  $(".brand-text-thsw").removeClass("brand-text-dark");
  $(".brand-text-thsw").addClass("brand-text-light");

  $(".nav-link").removeClass("text-white");
  $(".nav-link").addClass("text-secondary");

  $(".content-wrapper").removeClass("bg-dark-theme");
  $(".content-wrapper").addClass("bg-white");

  $(".card-header, .card-footer").removeClass("card-header-dark-theme");
  $(".card-header, .card-footer").addClass("bg-white");

  $(".card-body, .list-group-item-thsw").removeClass("card-dark-theme");
  $(".card-body, .list-group-item-thsw").addClass("bg-white");

  $(".chatbot-frame-thsw").removeClass("bg-dark-theme");
  $(".chatbot-frame-thsw").addClass("bg-white");

  $(".bot-header-thsw").removeClass("bg-dark-theme");
  $(".bot-header-thsw").addClass("bg-white");

  $(".faqDiv-thsw").removeClass("textRow-dark-theme");
  $(".faqDiv-thsw").addClass("textRow-light-theme");

}


function setNightTheme(){
  themeTypeVal='2';
  $('.themeTypeElm').val('2');
  //$("#nightThemeCss").removeAttr("disabled");

  graphsLabelsColor='white';
  amInnerColumnLabelsColor ='#fff';
  mapMarkerIcon=mapMarkerIconBlue;
  googleMapStyles=googleMapDarkStyles;
  bodyCutomScrollThemeClass="os-theme-light"
  cutomScrollThemeClassTyp1="os-theme-round-light"
  if(bodyOverlayScrollbarsInstances!=null)
  bodyOverlayScrollbarsInstances.options({ className : bodyCutomScrollThemeClass });
  if(divOverlayScrollbarsInstances!=null && divOverlayScrollbarsInstances.length>0)
  $.each(divOverlayScrollbarsInstances, function (index, instance){
    instance.options({ className : cutomScrollThemeClassTyp1 });
  })


  $("body").addClass("body-light-theme");
  $("body").removeClass("bg-white");

  $(".menu-thsw").addClass("text-light");
  $(".menu-thsw").removeClass("text-danger");

  $(".users-list-name-thsw").addClass("text-light");
  $(".users-list-name-thsw").removeClass("text-dark");

  $(".main-header-thsw, .main-Sidebar-thsw, .main-footer").addClass("navbar-dark");
  $(".main-header-thsw, .main-Sidebar-thsw, .main-footer").removeClass("navbar-light");

  $(".brand-text-thsw").addClass("brand-text-dark");
  $(".brand-text-thsw").removeClass("brand-text-light");

  $(".nav-link").addClass("text-white");
  $(".nav-link").removeClass("text-secondary");

  $(".content-wrapper").addClass("bg-dark-theme");
  $(".content-wrapper").removeClass("bg-white");

  $(".card-header, .card-footer").addClass("card-header-dark-theme");
  $(".card-header, .card-footer").removeClass("bg-white");

  $(".card-body, .list-group-item-thsw").addClass("card-dark-theme");
  $(".card-body, .list-group-item-thsw").removeClass("bg-white");

  $(".chatbot-frame-thsw").addClass("bg-dark-theme");
  $(".chatbot-frame-thsw").removeClass("bg-white");

  $(".bot-header-thsw").addClass("bg-dark-theme");
  $(".bot-header-thsw").removeClass("bg-white");

  $(".faqDiv-thsw").addClass("textRow-dark-theme");
  $(".faqDiv-thsw").removeClass("textRow-light-theme");

}

function updateLineChartConfig() {
    newOptions={
      legend: {
        labels: {
          fontColor: graphsLabelsColor
        }
      },
      scales: {
      yAxes: [{
        ticks: {
          fontColor: graphsLabelsColor,
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: graphsLabelsColor,
        }
      }]
    }
  };

  lineChart1.options.legend.labels.fontColor = graphsLabelsColor;
  lineChart1.options.scales.xAxes[0].ticks.fontColor = graphsLabelsColor;
  lineChart1.options.scales.yAxes[0].ticks.fontColor = graphsLabelsColor;

  lineChart2.options.legend.labels.fontColor = graphsLabelsColor;
  lineChart2.options.scales.xAxes[0].ticks.fontColor = graphsLabelsColor;
  lineChart2.options.scales.yAxes[0].ticks.fontColor = graphsLabelsColor;

  lineChart3.options.legend.labels.fontColor = graphsLabelsColor;
  lineChart3.options.scales.xAxes[0].ticks.fontColor = graphsLabelsColor;
  lineChart3.options.scales.yAxes[0].ticks.fontColor = graphsLabelsColor;

  ncovDoughnut.options.legend.labels.fontColor = graphsLabelsColor;

  lineChart1.update();
  lineChart2.update();
  lineChart3.update();
  ncovDoughnut.update();

  nCoVSatesCasesAmChart.legend.labels.template.fill = am4core.color(graphsLabelsColor);;
  nCoVSatesCasesAmChart.yAxes.values[0].renderer.labels.template.fill = am4core.color(amInnerColumnLabelsColor);
  nCoVSatesCasesAmChart.xAxes.values[0].renderer.labels.template.fill = am4core.color(graphsLabelsColor);
  //nCoVSatesCasesAmChart.series.values[0].columns.template.valueLabel.fill = am4core.color(graphsLabelsColor);
  nCoVSatesCasesAmChart.validateData();

}

$(document).ready(function(){
  $('body').on('click','.themeSwitchChkBox', function(){
    if($(".themeSwitchChkBox:checked").length){
    setNightTheme();
    updateLineChartConfig();
    //  location.replace("https://coronaindia.github.io/docs/indexNight.html")
    } else {
    setDayTheme();
   updateLineChartConfig();
      //location.replace("https://coronaindia.github.io/")
    }

  });
});
