import React from 'react';
function Hero() {
    return (  
       <div className = "container">
         <div className = "row text-center">
            <img src="/media/homehero.png" alt="home-hero"></img>
              <div className="mt-5 mb-5">
               <h1 className="mt-6"> Invest in everything</h1>
               <p>Online platform to invest in stocks, derivatives, mutual funds, and more.</p>
               {/* <button className="btn btn-primary" style={{width:'10%'}} >Signup now</button> */}
               </div>
             
         
       </div>
       </div>
    );
}

export default Hero;