/*----------------custom scroll bar js------------------------------------------*/

$(function() {
	//The passed argument has to be at least a empty object or a object with your desired options
    $("body").overlayScrollbars({className : bodyCutomScrollThemeClass });
    //common file load
    $.get("common-config.html", function(data){
        ("#commonfile").html(data);
    });
});
//initialize plugin with custom options on all div elements and return all instances as array
var instances = $('.customScrollBar').overlayScrollbars({className : cutomScrollThemeClassTyp1 }).overlayScrollbars();

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

