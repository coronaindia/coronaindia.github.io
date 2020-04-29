if(window.jQuery)
{
	$(function() {
		var myurl = '/coronaindia/views/media/plugin/twisterdata.html';
		$.ajax({
		  type: "get",
		  url: myurl,
		  
		  success: function(results) {
			console.log("response from twister data",results);
			$("body").append(results);
		  },
		  error: function(request, error) {
			console.log("There is an error. " + error);
		  },
		});

	});
}