var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
username:{
     type: String, required :true},
password:{
     type: password,required:true},
department:{
     type: String},
class:{
     type:String},
admissionno:{
     type:number},
address:{
    type:String},
mobileno:{
     type:number},
})

module.exports=mongoose.model('student',schema)