const todoModel=require('../model/todoModel')


//create todo api
exports.createTodo=(req,res)=>{
    const body=req.body
    const todoSubject=body["todoSubject"];
    const userName=req.headers.userName;
     const   todoDesc=body["todoDesc"];
     const createDate=Date.now();
     const updateDate=Date.now();
     const todoStatus="Now";
    const postBody={
        userName:userName,
        todoSubject:todoSubject,
        todoDesc:todoDesc,
        todoStatus:todoStatus,
        todoCreateDate:createDate,
        todoUpdateDate:updateDate
    }
    todoModel.create(postBody)
        .then(data=>res.status(201).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}

//read todo api
exports.selectTodo=(req,res)=>{
    const userName=req.headers.userName;
    todoModel.find({userName:userName})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}


//update todo api
exports.updateTodo=(req,res)=>{
    const id=req.params.id;
    const todoSubject=req.body.todoSubject;
    const todoDesc=req.body.todoDesc;
    const todoUpdateDate=Date.now()
    const body={
        todoSubject:todoSubject,
        todoDesc:todoDesc,
        todoUpdateDate:todoUpdateDate
    }
    todoModel.updateOne({_id:id},{$set: body})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}


//update status api
exports.updateStatus=(req,res)=>{
    const id=req.params.id;

    const todoStatus=req.body.todoStatus;
    const todoUpdateDate=Date.now()
    const body={
       todoStatus:todoStatus,
        todoUpdateDate:todoUpdateDate
    }
    todoModel.updateOne({_id:id},{$set: body})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}


//remove todo api
exports.removeTodo=(req,res)=>{
    todoModel.deleteOne({_id:req.params.id})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))

}


//read todo by status api
exports.selectTodoByStatus=(req,res)=>{



    const userName=req.headers.userName;
    const todoStatus=req.body.todoStatus
    todoModel.find({userName:userName,todoStatus:todoStatus})
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}


//read todo by date api
exports.selectTodoByDate=(req,res)=>{



    const userName=req.headers.userName;
    const fromDate=req.body.fromDate;
    const toDate=req.body.toDate;
    todoModel.find({userName:userName, todoCreateDate:{$gte:new Date(fromDate), $lte: new Date(toDate)} })
        .then(data=>res.status(200).json({data:data}))
        .catch(err=>res.status(400).json({data:err}))
}