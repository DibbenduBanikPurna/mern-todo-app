const jwt=require('jsonwebtoken')


module.exports=(req,res,next)=>{
    const token=req.headers["token"]
    jwt.verify(token,"12345678",(err,data)=>{
        if(err)
        {
            res.status(401).send("unauthorized");
        }
        else
        {
            const userName=data["data"]["userName"]
            req.headers.userName=userName;
            next();
        }
    })

}






