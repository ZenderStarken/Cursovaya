const {Schema, model, Types} = require("mongoose")

const grassSchema = new Schema ({
    name_grass:{type:String, required:true,unique:true},
    place:{type:String, required:true},
    opisanie:{type:String, required:true},
    chem:{type:String, required:true},
    ispolzovanie:{type:String, required:true},
    owner: {type:Types.ObjectId, ref:'User'}
})

module.exports = model('Grass', grassSchema)
