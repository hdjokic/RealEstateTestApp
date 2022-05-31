"use strict";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

var express = require('express');

var app = express();

var expressLayouts = require('express-ejs-layouts');

var indexRouter = require('./routes/index');

app.set('view engine', 'html'); // app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/views/login.html')
// })

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});
app.post('/index', function (req, res) {
  console.log('helooooooooo');
  console.log(req.body);
}); //app.set('views', __dirname + '/views');
//app.set('layout','layouts/layout');

app.use(expressLayouts);
app.use(express["static"]('public'));

var mongoose = require('mongoose'); //require('dotenv ').config();


mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
});
var db = mongoose.connection;
db.on('error', function (error) {
  return console.error(error);
});
db.once('open', function () {
  return console.log('connected to mongoose');
});
var myobj = {
  name: "Company Inc",
  address: "Highway 37"
};
db.collection("real-estate-app").insertOne(myobj, function (err, res) {
  if (err) throw err;
  console.log("1 document inserted");
  db.close();
});
app.use('/', indexRouter);
app.engine("html", expressLayouts);
app.set("views", "views");
app.set("view engine", "html");
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "views", "index.html"));
}); // indexRouter.post('/views/add', (req, res) => {   
// 	mongoose.query(`INSERT INTO property (House_Address, Sqft, Num_of_Bedrooms, Num_of_Bathroom, price) VALUES ('${req.body.house_address}', '${req.body.Sqft}','${req.body.Num_of_Bedrooms}','${req.body.Num_of_Bathroom}','${req.body.price}')` , (err, result) => {
// 	console.log(err, result)
// 	res.redirect('/views/add')
// 		})
// 	})
//     indexRouter.post('/views/delete', (req,res) => {
//         mongoose.query(`DELETE FROM property WHERE addressID = '${req.body.addressID}'`, (err,result) => { 
//             console.log(err, result) 
//             res.redirect('views/delete')
//             })
//     })
//     indexRouter.post('views/update', (req,res) => {
//             mongoose.query(`UPDATE property SET propertyType = '${req.body.propertytype}', price = '${req.body.price}', size='${req.body.size}', num_bedroom = '${req.body.num_bedroom}', num_bathroom = '${req.body.num_bathroom}' WHERE address = '${req.body.address}'`, (err,result) => {
//                 console.log(err, result) 
//                 res.redirect('/views/update')
//             })
//         })

app.listen(process.env.PORT || 3000);
//# sourceMappingURL=server.dev.js.map
