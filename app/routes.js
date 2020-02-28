const express=require('express'),
router=express.Router(),
maincontroller=require('./controllers/main.controller')
eventscontroller=require('./controllers/events.controller')
//export routes
module.exports=router

//define routes
router.get('/',maincontroller.showHome)

//event route
router.get('/events',eventscontroller.showEvents)
router.get('/events/:slug',eventscontroller.showSingle)