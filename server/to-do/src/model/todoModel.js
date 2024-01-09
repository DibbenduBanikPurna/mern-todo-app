const mongoose=require('mongoose')


const todoSchema=mongoose.Schema({
    userName:{type:String},
    todoSubject:{type:String},
    todoDesc:{type:String},
    todoStatus: {type:String},
    todoCreateDate:{type:Date},
    todoUpdateDate:{type:Date}


},{versionKey:false})

const todoModel=mongoose.model("todo", todoSchema);
module.exports=todoModel;