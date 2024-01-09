//basic
const express=require('express')
const router=require('./src/router/api')
const  bodyParser=require('body-parser')
const app=new express();
require('dotenv').config();

//security middleware lib import
const helmet=require('helmet')
const cors=require('cors')
const hpp=require('hpp')
const xssClean=require('xss-clean')
const mongoSanitize=require('express-mongo-sanitize')
const rateLimit=require('express-rate-limit')


//database lib import
const mongoose=require('mongoose')


//security middleware implement
app.use(helmet())
app.use(cors())
app.use(hpp())
app.use(xssClean())
app.use(mongoSanitize());

//body parser implement
app.use(express.json());

//express rate limit implement
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).

})
app.use(limiter)

//console.log(process.env.MONGOURL)
//database connection
const URI="mongodb+srv://purna:2470purna@cluster0.z2een.mongodb.net/todos"
const options={user:'', pass:'',autoIndex:true}
mongoose.connect(URI,options)
.catch(err=>console.log(err))
console.log("connect")

//1st page
app.get('/',(req,res)=>{
    res.send("Welcome To My Project")
})

//routing implement
app.use('/api', router);



//undefined route implement

app.use('*',(req,res)=>{
    res.status(404).send("404 Not Found")
})

module.exports=app;
