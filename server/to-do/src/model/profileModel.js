const  mongoose=require('mongoose')

const profileSchema=mongoose.Schema(
    {
        firstName:{type:String, required:true},
        lastName:{type:String, required:true},
        email:{type:String, required:true},
        mobile:{type:String,
        validate:{
            validator:function (values)
            {
                if(values.length==11)
                {
                    return true;
                }
                else{
                    return false;
                }
            },
            message:"Invalid Phone number"
        }
        },
        city:{type:String},
        userName:{type:String, unique:true},
        password:{type:String}

    },{versionKey:false})

const profileModel=mongoose.model("profile", profileSchema)
module.exports=profileModel;
