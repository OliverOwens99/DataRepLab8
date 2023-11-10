const express = require('express')
const app = express()
const port = 4000
//adding body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//
const cors = require('cors');
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying!')
})

//route with api
app.get('/api/books', (req, res) => {
    const data = [{ "books": [{ "title": "Learn Git in a Month of Lunches", "isbn": "1617292419", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "status": "MEAP", "authors": ["Rick Umali"], "categories": [] }, { "title": "MongoDB in Action, Second Edition", "isbn": "1617291609", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg", "status": "MEAP", "authors": ["Kyle Banker", "Peter Bakkum", "Tim Hawkins", "Shaun Verch", "Douglas Garrett"], "categories": [] }, { "title": "Getting MEAN with Mongo, Express, Angular, and Node", "isbn": "1617292036", "pageCount": 0, "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg", "status": "MEAP", "authors": ["Simon Holmes"], "categories": [] }] }];
    res.json(data);

})

//route with post
app.post('/name', (req, res) => {
    res.send('Hello  from post ' + req.body.fname + ' ' + req.body.lname);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})