import react, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./signup.css";
// import {Link} from "react-router-dom";
function Signup(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSumbit = async (e)=>{ 
        e.preventDefault();
        setLoading(true);
        try{
            const res = await fetch("/signup",{
                method:'POST',
                headers:{
                    "Content-Type" : "application/json"
                },
                credentials:"include",
                body:JSON.stringify({email, password, username}),

            })
     const contentType = res.headers.get("content-type");
    let data;
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    } else {
      throw new Error("Server response is not JSON");
    }
 

    if (!res.ok) {
      alert(data.message);
      throw new Error(data.message || "Signup failed");
    }
    else{
      // Store authentication status in localStorage for dashboard access
      localStorage.setItem("isAuthenticated", "true");
      if (email) {
        localStorage.setItem("userEmail", email);
      }
      if (data.user?.username || username) {
        localStorage.setItem("username", data.user?.username || username);
      }
      // Redirect to dashboard with auth credentials and user info
      let authUrl = `http://localhost:3001?auth=true`;
      if (email) {
        authUrl += `&email=${encodeURIComponent(email)}`;
      }
      if (data.user?.username || username) {
        authUrl += `&username=${encodeURIComponent(data.user?.username || username)}`;
      }
      window.location.href = authUrl;
    }
  } catch (err) {                                     
    console.error("Signup error:", err.message);
  } finally {
    setLoading(false);
  }
};
           
return (
  
        <form className='submit' onSubmit={handleSumbit}>
        <div className="signup">
              <input id= "mail" type="text" placeholder="Enter your email" value={email}
              onChange={(e)=>{
              setEmail(e.target.value)}}
              required/>
              <br />
              <input id="username" type ="text" placeholder="Enter your username" value={username}
              onChange={(e)=>{
              setUsername(e.target.value)}}
              required/>
              <br />
              <input id="password" type ="password" placeholder="Enter your password" value={password}
              onChange={(e)=>{
              setPassword(e.target.value)}}
              required/>
               <br />
              <button type = "submit" id="one" className='btn btn-primary'> Signup</button>
              <br />
              Already have an account?
              <br />
              <button 
                type="button" 
                onClick={() => navigate('/login')} 
                className='btn btn-secondary'
                style={{ marginTop: '10px' }}
              >
                Login
              </button>
         </div>
         </form> 
    );
}
 
export default Signup;