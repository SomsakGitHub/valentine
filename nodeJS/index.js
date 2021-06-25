const express = require('express');
const { mongoose } = require('./src/db/mongoose')
const app = express();
const port = process.env.PORT || 8080;

//React allow.
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');
    res.set('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token');
    next();
});

//Settings.
app.set('port', port);

//Middlewares.
app.use(express.json());

//Routes.
app.use(require('./src/routers/contact.routes'));

// app.get("/", function(req, res){
//     res.send("hello from docker!");
// })

//Starting the serve.
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
})