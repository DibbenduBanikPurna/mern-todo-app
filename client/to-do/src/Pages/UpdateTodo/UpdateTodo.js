import React, {useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

const UpdateTodo = () => {
    //console.log(.params.id)
    const navigate=useNavigate()
    const [todo,setTodo]=useState({})
    const {id}=useParams()
    const handleChange=(e)=>{
        const field=e.target.name;
        const value=e.target.value;
        let newData={...todo};
        newData[field]=value;
        setTodo(newData)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(`http://localhost:5000/api/updateTodo/${id}`,todo,{
            headers:{
                token:sessionStorage.getItem("token")
            }
        }).then(res=>{
            if(res.status===200)
            {
                alert("Update success")
                navigate('/todo')
            }
            else{
                alert("Update Failed!")
            }
        }).catch((err)=>console.log(err))
    }
    return (
        <div className="row">
            <div className="col-md-3 m-auto">
                <h2>Update To-Do</h2>
                <form onSubmit={handleSubmit}>
                    <input className="form-control" onBlur={handleChange} name="todoSubject" type="text" placeholder="Sujbect"/>
                    <br/>
                    <input onBlur={handleChange} className="form-control" name="todoDesc" type="text" placeholder="Descrption"/>
                    <br/>
                    <input type="submit" value="Update-To-Do" className="btn btn-success form-control"/>
                </form>
            </div>

        </div>
    );
};

export default UpdateTodo;