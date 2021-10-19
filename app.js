const express = require ('express');
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");


app.get('/',(req,res)=>{
  res.render('stores',{
    stores:[
      {name:'abc',number:981,email:'abc@mail.com',address:'delhi'},
      {name:'def',number:982,email:'def@mail.com',address:'delhi'},
    ]
  });
})

app.get('/add',(req,res)=>{
  res.render('storeAdd');
})

app.post('/add',(req,res)=>{
  
})

app.listen(3000,() => {
  console.log('Serving on port 3000');
})