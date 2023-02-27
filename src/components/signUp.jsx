import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let [name,setName]=useState("");
    let [mobile,setMobile]=useState("");
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let [confirm_password,setConfirm_password]= useState ("");

    let navigate= useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault()
        let data = {name,mobile,email,password,confirm_password}
        if(name && mobile && email && (password == confirm_password)) {
            axios.post('http://localhost:4000/signup',data)
            .then((res)=>{
                alert(res.data.message)
                navigate('/')
                // console.log(data);
            })
        }else{
            alert("invalid credentials")
        }
    }
    return ( 
        <div className="signUp">
            <h1>Sign Up page</h1>
            <div className="signUp_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="name">
                        <input type="text" 
                        placeholder="enter your name" 
                        className="form_control" 
                        required
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        name="name"/>
                    </div>
                    <div className="mobile_number">
                        <input type="tel" 
                        placeholder="enter your number" 
                        minLength={10} 
                        maxLength={10} 
                        className="form_control" 
                        required
                        value={mobile} 
                        onChange={(e)=>setMobile(e.target.value)}
                        name="mobile"/>
                    </div>
                    <div className="email">
                        <input type="email" 
                        placeholder="enter your email" 
                        className="form_control" 
                        required
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        name="email"/>
                    </div>
                    <div className="password">
                        <input type="password" 
                        placeholder="enter password" 
                        className="form_control" 
                        required
                        value={password} 
                        onChange={(e)=>setPassword(e.target.value)} 
                        name="password"/>
                    </div>
                    <div className="confirm_password">
                        <input type="password" 
                        placeholder="re-enter password" 
                        className="form_control"
                        required 
                        value={confirm_password} 
                        onChange={(e)=>setConfirm_password(e.target.value)}
                        name="confirm_password"/>
                    </div>
                    <div className="signUp_button">
                        <button className="btn btn-primary">Sign up</button>
                    </div>
                    <div className="login_button">
                        <p>Already a user</p>
                        <Link to="/" className="btn btn-outline-primary">Login</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default SignUp;