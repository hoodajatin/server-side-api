var express=require('express');
var app=express();

var port=3001;

app.use(express.static(__dirname+'/'));
app.listen(port);

console.log('server started at : '+port);

app.post('/api/login',function(req,res){
	var results=[{
	title:"java",
    instructor:"saurabh",
    level:"beginner",
    total_videos:30
  },{
	title:"C++",
    instructor:"saurabh",
     level:"beginner",
     total_videos:50
  },{
	title:"C",
    instructor:"saurabh",
    level:"beginner",
    total_videos:70
  },{
	title:"Web Development",
    instructor:"saurabh",
    level:"beginner",
    total_videos:16
}];

   res.json(results);
})