import React from 'react';
import "./Pricing.css"
function Pricing() {
    return (
        <div className="container p-5">
        <div className = "row">
            <div className = "col-4 ">
                <h2>Unbeatable Pricing</h2>
                <p className = "mt-5">
                    We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
                   
                </p>
                <a href="" style={{textDecoration:"none"}}> See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className = "col-2">


                </div>
                <div className= "col-6">
                    {/* <div className = "box">
                        <div className="p-5 border" style={{width:"80%"}}> 
                            <h2> &#8377; 0</h2>
                            <p style={{width:"80%"}}> Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="p-5 border">
                            <h2> &#8377; 20</h2>
                            <p> Intrday and F&O</p>
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col p-5 border text-center" style={{ paddingLeft:"10px"}}>           <h2> &#8377; 0</h2>
                            <p style={{width:"80%",  paddingLeft:"10px"}}> Free equity delivery and direct mutual funds</p></div>
                        <div className="col p-5 text-center border">
                            <h2> &#8377; 20</h2>
                            <p> Intrday and F&O</p>
                        </div>
                    </div>
                </div>
            
        </div>
    </div>
     );
}

export default Pricing;