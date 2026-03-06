import react, { useState } from 'react';
import "./login.css";
import {Link, useNavigate} from "react-router-dom";
function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSumit = async (e)=>{ 
        e.preventDefault();
        setLoading(true);
        try{
            const res = await fetch("/login",{
                method:'POST',
                headers:{
                    "Content-type" : "application/json"
                },
                credentials:"include",
                body:JSON.stringify({email, password}),

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
      throw new Error(data.message || "Login failed");
    }
    else{
      // Store authentication status in localStorage for dashboard access
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", email);
      if (data.user?.username) {
        localStorage.setItem("username", data.user.username);
      }
      alert("Login Successful");
      // Redirect to home page after successful login
      navigate("/");
    }
  } catch (err) {                                     
    console.error("Login error:", err.message);
  } finally {
    setLoading(false);
  }
};
           
return (
        <div className="login-container">
          <form className='submit' onSubmit={handleSumit}>
            <div className="login">
              <input 
                id="mail" 
                type="text" 
                placeholder="Enter your email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required
              />
              
              <input 
                id="password" 
                type="password" 
                placeholder="Enter your password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              
              <button 
                type="submit" 
                id="one" 
                className='btn btn-primary'
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </form>
        </div>
    );
}
 
export default Login;