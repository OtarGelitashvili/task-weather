const mongoose =require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/weather',{
 useNewUrlParser: true,
 useUnifiedTopology: true
 })
 const cityCshema= new mongoose.Schema({
     name:String
 })
const cityModel=new mongoose.model('City',cityCshema)

// var tbilisi=new cityModel({name:'tbilisi'});
// tbilisi.save();
// var batumi=new cityModel({name:'batumi'});
// batumi.save();
// var kutaisi=new cityModel({name:'kutaisi'});
// kutaisi.save();

module.exports=cityModel;