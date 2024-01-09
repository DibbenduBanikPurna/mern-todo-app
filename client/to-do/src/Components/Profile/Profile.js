import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {
    const [profile,setProfile]=useState({})
    useEffect(() => {
        axios.get("http://localhost:5000/api/readProfile",{
            headers:{
                token:sessionStorage.getItem('token')
            }
        }).then(res=>{
            if(res.status===200)
            {
                setProfile(res.data.data[0])
                console.log(res.data)
            }
            else{
                alert("something wrong")
            }
        }).catch((err)=>console.log(err))
    }, []);
    return (
        <div className="container">
            <div className="rown">
                <div className="col-md-4 bg-light">
                    <div className="card">
                        <div className="card-body">
                            <p>UserName:{profile.userName}</p>
                            <p>Email:{profile.email}</p>
                            <p>First-Name:{profile.firstName}</p>
                            <p>Last-Name:{profile.lastName}</p>
                            <p>City:{profile.city}</p>
                            <p>Mobile:{profile.mobile}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Profile;