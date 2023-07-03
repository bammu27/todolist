const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+'/date.js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

var items = [];
var works= [];

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  
  
  res.render('list',{day1:date.getdate(),newitems:items,action1:'/work',pointing:'work-list',webpage:'main'})
});

app.post('/',(req,res)=>{

  var type  = req.body.list;
  var item = req.body.newitem;
  if(type==='main'){
   
    items.push(item)
    res.redirect('/');
  }
  else{
   
    works.push(item)
    res.redirect('/work');
  }

})

app.get('/work',(req,res)=>{

 res.render('list',{day1:'work-list',newitems:works,action1:'/',pointing:'item-list',webpage:'work'})


})


app.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port 3000");
});
