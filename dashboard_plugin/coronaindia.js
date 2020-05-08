/*

#Project   : COVID19
#Team      : https://github.com/orgs/elComrades/people
#Author    : github.com/prashantmi, github.com/deepandu
						 github.com/abhijatchaturvedi, github.com/siddharthsrivastava, github.com/jatinasija93


*/
//still not much use of jquery, but to make it future proof
if(window.jQuery)
{
	$(function() {
		
		var baseUrl = "https://elcomrades.github.io/coronaindia/"
		var template = unescape("<div id=\"twister\"> <button type=\"button\" class=\"crosscloseif\" onclick=\"hide()\">"
									+"<svg version=\"1.1\" viewBox=\"0 0 100 100\" xml:space=\"preserve\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" height=\"20\"> <polygon fill=\"#010101\" points=\"77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2 51.5,51.1 79.6,23 \"><\/polygon> <\/svg>"
									+"<\/button> <div class=\"draggablearea\" > "
									+"<iframe src=\""+baseUrl+"\/views\/media\/plugin\/pluginHtml.html\" name=\"crbz_scag_frame\" width=\"180\" scrolling=\"no\" height=\"130\" rameborder=\"0\" id=\"twisstiframe\" style=\"border:0px;\"><\/iframe> <\/div> "
									+"<\/div>");
		$("body").append(template);

				
		
	});
	
}
else{
	console.error("jQuery required for coronaindia dashboard plugin");
}
function hide(){
	$("#twister").hide();
}