//Stock Market App From Subaru Arakawa


const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');
const path = require('path')

const PORT = process.env.PORT || 5000;

//Set Handlebar Mid
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const otherstuff = "hello there, this is other stff"

//Set Handlbar routew
app.get('/', function (req, res) {
    res.render('home', {
        stuff: otherstuff
    });
});

//sET static folder

app.use(express.static(path.join(__dirname,'public')));


app.listen(PORT,( ) => {
    console.log('Server Listeing on port ' + PORT);
    
});