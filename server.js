require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
//data
const vegetables = require('./models/vegetables')
const Vegetable = require('./models/Vegetable')
const app = express();
const PORT = 3000

//engine configuration
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//middleware
app.use((req, res,next)=>{
    console.log(req.url)
    next()
})

//parse data from request
app.use(express.urlencoded({ extended: false }))

//show all the vegetables
app.get('/',(req, res)=>{
    res.render(vegetables)
})


//return list of 
app.get('/vegetables', (req, res)=>{
    // res.render('Index', {vegetables: vegetables})
    Vegetable.find({},(error,allVegetables)=>{
        res.render('Index', {vegetables: allVegetables})
    })
})

app.post('/vegetables', (req, res) => {
    console.log(req.body)
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false
    }
    // fruits.push(req.body)
    Vegetable.create(req.body, (error, createdVegetable) => {
        // res.send(createdFruit)
        res.redirect('/vegetables')
    })

});


//new vegetable route
app.get('/vegetables/new', (req, res) => {
    res.render('New');
});

//show route for each individual vegetable, color and if they are ready to eat
app.get('/vegetables/:id', (req, res) => {
    // res.render('show',{vegetables: vegetables[req.params.indexOfVegetablesArray]});
    Vegetable.findById(req.params.id,(error, foundVegetable)=>{
        res.render('Show', {vegetable: foundVegetable})
    } )
});

//if none of the routes matches the request show 404 page. Has to be last on page before listening
app.get('*', (req, res)=>{
    res.redirect('404')
})

// Tell the app to listen on port 3000
app.listen(3000, () => {
    console.log(`Server running on  port: ${PORT}`);
    mongoose.set('strictQuery', true)
    // connect to mongodDB
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    mongoose.connection.once('open', () => {
        console.log('Connected to MongoDB!')
    })
})
