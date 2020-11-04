const path= require("path");
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express()
const bodyParser = require('body-parser');
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}
));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// Http logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
    extname:".hbs"
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource','views')) ;


app.get("/",(req,res)=>
{
  res.render("home");
})
app.post("/",(req,res)=>
{
 var body=req.body; 
 var num1=+(body.Num1);
 var num2=+(body.Num2);
 var Cacul= body.Cacul;
 switch(Cacul){
   case "Plus":
     req.body.result=num1+num2;
     break;
    case "Sub":
      req.body.result=num1-num2;
      break;
    case "Mul":
      req.body.result=num1*num2;
      break;
    case "Div":
      req.body.result=num1/num2;
      break;
 }
 console.log(req.body.result);
  res.send(req.body);
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})