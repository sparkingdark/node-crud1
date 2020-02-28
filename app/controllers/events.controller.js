module.exports={
    //show all vents
    showEvents: (req,res) =>{
        const events = [
            {name:'Basketball',slug:'basketball',description:'throwinf into a basket'},
            {name:'swimming',slug:'swimming',description:'swimmings'}
        ]
        ////return A view with data

        res.render('pages/events',{events:events})
    },

    //show a single events
    showSingle:(req,res) => {
        //get a single event
        const event={name:'Basketball',slug:'basketball',description:'throwinf into a basket'}

        res.render('pages/single',{event: event});
    }
}


