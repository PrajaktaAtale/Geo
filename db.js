const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/geolocapp?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
const connectToMongo = ()=>{
mongoose.connect(mongoURI, ()=>{
console.log("Connected  Mongo is not Successfully");
})
}
module.exports = connectToMongo;