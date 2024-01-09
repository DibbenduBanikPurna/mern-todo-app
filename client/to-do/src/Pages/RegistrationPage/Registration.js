import React, {useState} from 'react';
import axios from "axios";
import { useNavigate} from "react-router-dom";

const Registration = () => {
    const navigate=useNavigate()
    const [createProfile,setCreateProfile]=useState({})
    const [user,setUser]=useState({})
    console.log(user)
    const handleChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...createProfile };
        newData[field] = value
        setCreateProfile(newData)
        //console.log(loginData)
    }

    const  handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/api/createProfile",createProfile).then(res=>{
           // console.log(res.status)
            if(res.status===201)
            {
                alert("registration success")
                setUser(res.data);
                navigate("/login")
            }
            else{
                alert("registration failed!")
            }
           // console.log(res.data)
        }).catch( (err)=>console.log(err))
        console.log(createProfile)

    }
    const  updateProfile=()=>{
        navigate("/updateProfile")
    }
    return (
        <div className="row ">

            <div className="col-md-3 m-auto bg-light">
                <h2 className="text-muted">Create Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input name="firstName" className="form-control" onBlur={handleChange} type="text" placeholder="Enter Your First Name"/>
                    <br/>
                    <input name="lastName"  className="form-control" onBlur={handleChange} type="text" placeholder="Enter Your Last Name"/>
                    <br/>
                    <input name="email"  className="form-control" onBlur={handleChange} type="email" placeholder="Enter Your Email"/>
                    <br/>
                    <input name="mobile"  className="form-control" onBlur={handleChange} type="text" placeholder="Enter Your Contact No."/>
                    <br/>
                    <input name="city"  className="form-control" onBlur={handleChange} type="text" placeholder="Enter Your City"/>
                    <br/>
                    <input name="userName"  className="form-control" onBlur={handleChange} type="text" placeholder="Enter userName"/>
                    <br/>
                    <input name="password"  className="form-control" onBlur={handleChange} type="password" placeholder="*****"/>
                    <br/>

                    <input className="btn btn-success form-control" type="submit" value="submit"/>
                </form>
                <br/>

                <button className="btn btn-warning form-control circle-radius" onClick={updateProfile}> Update Profile</button>
            </div>


        </div>
    );
};

export default Registration;