import { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

function SignUp(){
    const [user, setUser] = useState({});
    const navigate= useNavigate();
    
    function handleregister(){
        console.log(user);
        fetch("https://crm-app-api-ybms.onrender.com/api/user/signup",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user),
        })
        .then((res)=>{
            console.log(res);
            navigate("/Login");
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    return(
        <div className="Signuppage"> 
            <div className="signupform">
                <div className="form-group">
                    <label className="form-label">Enter Your Name</label>
                    <input 
                        onInput={(e)=>setUser({...user, name:e.target.value})}
                        type="text" 
                        name="name" 
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        onInput={(e)=>setUser({...user, email:e.target.value})}
                        type="email" 
                        name="email" 
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Username</label>
                    <input
                        onInput={(e)=>setUser({...user, username:e.target.value})}
                        type="text" 
                        name="username" 
                        className="form-control"
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input 
                        onInput={(e)=>setUser({...user, password:e.target.value})}
                        type="password" 
                        name="password" 
                        className="form-control"
                    />
                </div>

                <button onClick={handleregister} className="buttons">Register</button>
            </div>
        </div>
    );
}

export default SignUp;