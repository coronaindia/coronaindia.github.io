/*----------------custom scroll bar js------------------------------------------*/

$(function() {
	//The passed argument has to be at least a empty object or a object with your desired options
  bodyOverlayScrollbarsInstances = $("body").overlayScrollbars({className : bodyCutomScrollThemeClass }).overlayScrollbars();;
    //common file load
    $.get("common-config.html", function(data){
        $("#commonfile").html(data);
    });

    //visitor count
    var myurl = 'https://www.menggabungkanpdf.id/fetch_count.php?key=mysecret';
    $.ajax({
      type: "get",
      url: myurl,
      dataType: 'json',
      success: function(results) {
        //results = JSON.parse(results.response);
        $("#visitorCount").html(results.count);
      },
      error: function(request, error) {
        console.log("There is an error. " + error);
      },
    });


});
//initialize plugin with custom options on all div elements and return all instances as array
if($('.customScrollBar').length)
  divOverlayScrollbarsInstances = $('.customScrollBar').overlayScrollbars({className : cutomScrollThemeClassTyp1 }).overlayScrollbars();

//get the instance information of all elements on your page and store it into a variable
//the array can contain undefined entries
/*
var instances = $("*").overlayScrollbars();

$.each(instances, function(index, instance) {
    //check for validity
    if(instance !== undefined) {
        //do domething with the instance
    }
});
*/
