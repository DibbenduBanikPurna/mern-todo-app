import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useNavigate} from "react-router-dom";



const SelectTodo = () => {
    const [todo,setTodo]=useState([])
    const navigate=useNavigate()
    useEffect(() => {
        axios.get("http://localhost:5000/api/todo/",{
            headers:{
                token:sessionStorage.getItem('token')
            }
        }).then(res=>{

                console.log(res.data.data)
                setTodo(res.data.data)

        }).catch((err)=>console.log(err))
    }, []);

    const updateTodo=(id)=>{

        navigate(`/todo/${id}`)
    }

    const deleteTodo=(id)=>{
        console.log(id)

        axios.post(`http://localhost:5000/api/removeTodo/${id}`,{
            headers:{
                token:sessionStorage.getItem("token")
            }
        }).then(res=>{
            if(res.status===200)
            {
                alert("delete success")
            }
            else{
                alert("delete Failed!")
            }
        }).catch((err)=>console.log(err))
    }

    const updateStat=(id)=>{
        const todoStatus={todoStatus:"completed"}
        axios.post(`http://localhost:5000/api/updateStatus/${id}`,todoStatus,{
            headers:{
                token:sessionStorage.getItem("token")
            }
        }).then(res=>{
            if(res.status===200)
            {
                alert("update success")
            }
            else{
                alert("update Failed!")
            }
        }).catch((err)=>console.log(err))
    }
    const myList=todo.map((todo,i)=>{
        return(
            <tbody>
            <tr>
                <td>{todo.userName}</td>
                <td>{todo.todoSubject}</td>
                <td>{todo.todoDesc}</td>
                <td>{todo.todoStatus}</td>
                <td>{todo.todoCreateDate}</td>
                <td>{todo.todoUpdateDate}</td>
                <td>
                    <button onClick={(todo_id)=>updateTodo(todo._id)} className="btn btn-warning">Update</button>
                </td>
                <td>
                    <button onClick={(todo_id)=>updateStat(todo._id)}  className="btn btn-primary">Update_status</button></td>
                <td><button onClick={(todo_id)=>deleteTodo(todo._id)} className="btn btn-danger">Delete</button></td>
            </tr>
            </tbody>
        )
    })

    return (
        <div className="container">

                <h2>Tea</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">userName</th>
                        <th scope="col">subject</th>
                        <th scope="col">description</th>
                        <th scope="col">status</th>
                        <th scope="col"> createDate</th>
                        <th scope="col">updateDate</th>
                        <th scope="col">update</th>
                        <th scope="col">updateStatus</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    {myList}
                </table>





        </div>

);
};

export default SelectTodo;