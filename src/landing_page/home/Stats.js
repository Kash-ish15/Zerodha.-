import { grey } from '@mui/material/colors';
import React from 'react';
function Stats() {
    return ( 
       
           <div className = "container">
            <div className="row mt-5 ">
                <div className="col-6 p-5 ">
                    <h1> Trust with confidence</h1>
                    <h3 className="mt-5">
                        Customer-first always
                    </h3>
                    <p style={{width:"60%", color:"#938484ff"}}>That's why 1.3+ crore customers trust Brisko with &#8377;3.5+ lakh crores worth of equity investments</p>
<h3 className="mt-5">
                       No spam or gimmicks
                    </h3>
                    <p style={{width:"60%", color:"#938484ff"}}>No gimmicks, soam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                    <h3 className="mt-5">
                       The Brisko universe
                    </h3>
                    <p style={{width:"60%", color:"#938484ff"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h3 className="mt-5">
                      Do better with money
                    </h3>
                    <p style={{width:"60%", color:"#938484ff"}}>With initiatives like Nudge and Kill switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                 </div>
                    <div className="col-6 mt-5">
                    <img style={{width:'90%', height:'90%'}}
                    src="./media/ecosystem.png" alt="ecosystem"></img>
                    <a href='' style={{marginLeft:'100px', textDecoration:'none'}}>Try our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href='' style={{marginLeft:'100px',
                     textDecoration:'none'
                    }}> Kite</a>
                    </div>
                   
                 
         </div>


            </div>
      
     );
}

export default Stats;