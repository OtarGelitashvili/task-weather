const express=require('express');
const request=require('request-promise');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cityModel=require('../Db/mongodb.js');
const path=require('path');
const getWeather=require('../weathercode/code.js');

const port=process.env.PORT ||3000;
const app=express();

const viewPath=path.join(__dirname,'../templates/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : true}));

app.get('/', function(req, res) {

    cityModel.find({}, function(err, cities) {

        getWeather(cities).then(function(results) {

            var weatherInfo = {weatherInfo : results};

            res.render( 'index',weatherInfo);
            
        });

    });      

});
app.listen(port,()=>{
    console.log('server:' + port);
})

