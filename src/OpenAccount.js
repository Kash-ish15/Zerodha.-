
import React from 'react';
import {useNavigate} from "react-router-dom";
function OpenAccount() {
  const navigate = useNavigate();
    const handlesubmit = () => {
      navigate("/signup");
    };

    return (
        <div className="mt-5 text-center">
            <h1 className="mt-6"> Open a Zerodha Account</h1>
            <p>Modern platforms and app, &#8377; 0 investments, and flat &#8377;20 intraday and F&O trades.</p>
            <button className="btn btn-primary" style={{width:'10%'}}  onClick={handlesubmit}>Signup now</button>
               </div>
     );
}

export default OpenAccount;