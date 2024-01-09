import React, {useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreateTodo = () => {
    const navigate=useNavigate()
    const [todo,setTodo]=useState({})
    const  handleChange=e=>{
        const field=e.target.name;
        const value=e.target.value;
        let newData={...todo};
         newData[field]=value;
         setTodo(newData)
    }
    const  handleSubmit=e=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/createTodo",todo,{



            headers: {
                'token': sessionStorage.getItem('token')
            }
        })
            .then(res=>{
                if(res.status===201)
                {
                    alert("todo added success");
                    navigate('/todo')
                }
                else{
                    alert("todo added Failed!")
                }
            })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 m-auto bg-light">
                    <h2>Create TO-DO</h2>
                    <form onSubmit={handleSubmit}>
                        <input className="form-control" onBlur={handleChange} name="todoSubject" type="text" placeholder="Sujbect"/>
                        <br/>
                        <input className="form-control" onBlur={handleChange} name="todoDesc" type="text" placeholder="Descrption"/>
                        <br/>
                        <input type="submit" value="Add-To-Do"  className="btn btn-success form-control" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreateTodo;