import { Link } from "react-router-dom";
import { useState } from "react";
const Login = () => {
    let [email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let handleSubmit = () =>{

    }
    return ( 
        <div className="login">
            <h1>Login Page</h1>
            <div className="login_form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="email">
                        <input type="email" 
                        className="form_control" 
                        placeholder="email address" 
                        name="email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="password">
                        <input type="password" 
                        className="form-control" 
                        placeholder="enter password" 
                        name="password" 
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className="login_button">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="signUp_button">
                        <p>Are you a new user ?</p>
                        <Link to='/signup' className="btn btn-outline-primary">Sign up</Link>
                    </div>
                </form>
            </div>
         </div> 
    );
}
 
export default Login;<div className="login">
</div>