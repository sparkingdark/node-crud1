const express= require('express'),
app=express(),
port= process.env.PORT || 8080,
expresslayouts =require('express-ejs-layouts');


//configure our application
//tell express where to look for static assets
app.use(express.static(__dirname+'public'))


//set ejs as our templatinfg engine
app.set('view engine','ejs');
app.use(expresslayouts)
//set the routes
app.use(require('./app/routes'))



app.listen(port,()=>{
    console.log('App listening to http://localhost:${port}');
    
})

