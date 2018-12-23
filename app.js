	/*var resultsd=document.getElementById("results");
	console.log(resultsd);
	resultsd.innerHTML="<p> message by js </p>";*/


"use strict"

$(document).ready(function(){

var resultlist=$("#resultlist");/*same as above commented ,same work*/
/*resultlist.text("injected using jquuuery");*/

var togglebutton=$("#togglebutton");
togglebutton.on("click",function(){
	console.log("Button Clicked");
	resultlist.toggle(500);

	if(togglebutton.text()=="Hide"){
		togglebutton.text("Show");

	}
	else{
		togglebutton.text("Hide");
	}
});
var results=[];

function displayresults(results){


resultlist.empty();


$.each(results,function(i , item){
	var newresult=$("<div class='result'>"+"<div class='title'>"+item.title+"</div>"+
	"<div>"+"Level : "+item.level+"</div>"+"<div>"+"Total Videos : "+item.total_videos+
        "</div>"+"<div>"+"Instructor : "+item.instructor+"</div>"+"</div>");
	resultlist.append(newresult);



	newresult.hover(function(){
     $(this).css("background-color","lightgray");
      $(this).css("color","darkblue");
       $(this).css("border-color","darkblue");
	},function(){
$(this).css("background-color","transparent");
      $(this).css("color","black");
       $(this).css("border-color","black");
	})
});

}





 $("#loginform").on("submit",function(){

       
    var username=$("#username").val();
    var password=$("#password").val();

     if(username=="jhooda21098@gmail.com" && password=="bun21098"){


     	$.post("/api/login", {},function(data){
 		console.log("success ::" + data);
 		displayresults(data);
        
        $("#loginform").hide();
        $("#logoutsection").show();
 		$("#errormsg").empty();


 	})

 	.fail(function(data){
 		$("#errormsg").text("Wrong data is typed");

 	})

 	.done(function(){
     
 	})
     }else {
     	$("#errormsg").text("username and password are wrong.");
     }
 
 	return false;
 });
 $("#logoutbutton").on('click',function(){
 	$("#loginform").show();
        $("#logoutsection").hide();
        resultlist.empty();
        resultlist.text("LOGIN TO GET INFORMATION")
 })
});
