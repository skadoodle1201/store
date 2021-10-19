const express = require ('express');
const app = express();
const db = require('./db')


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");


app.get('/',(req,res)=>{
  db.getAllStores()
  .then((stores)=>{
    res.render('stores',{stores})
  })
  .catch((err)=>{
    res.send(err)
  })
})

app.get('/add',(req,res)=>{
  res.render('storeAdd')
})

app.post('/add',(req,res)=>{

  db.addNewStore(req.body.NAME, req.body.NUMBER, req.body.ADDRESS, req.body.EMAIL)
  .then(()=>{
    res.redirect('/')
  })
  .catch((err)=>{
    res.send(err)
  })
})

app.listen(3000,() => {
  console.log('Serving on port 3000');
})