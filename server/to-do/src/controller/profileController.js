const profileModel=require('../model/profileModel')
const jwt=require('jsonwebtoken')


//profile create api
exports.createProfile=((req,res)=>{
    const info=req.body;
    profileModel.create(info)
        .then(data=>res.status(201).json({status:"created",data:data }))
        .catch(err=>res.status(400).json({status:"Failed!", data:err }))
})

//login api
exports.userLogin=(req,res)=>{
    const userName=req.body.userName;
    const password=req.body.password;
    profileModel.find({userName:userName,password:password})
        .then(data=>{
            if(data.length>0)
            {
                const payload={
                    exp: Math.floor(Date.now() / 1000) + (60 * 60 *60 * 60),
                    data:data[0]
                }
                const token=jwt.sign(payload,"12345678")
                res.status(200).json({token:token,data:data[0]})
            }
            else{
                res.status(401).send("unauthorized!")
            }
        })
        .catch(err=>  res.status(400).json({data:err}))

}


//readprofile api
exports.readProfile=(req,res)=>{
    const userName=req.headers.userName
    profileModel.find({userName:userName})
        .then(data=>res.status(200).json({data:data}))
    .catch(err=>res.status(400).json({data:err}))
}

//update profile
exports.updateProfile=(req,res)=>{
    const query=req.headers.userName;
    const info=req.body;
    //res.send(info);
    profileModel.updateOne({userName:query},{$set:info},{upsert:true})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}