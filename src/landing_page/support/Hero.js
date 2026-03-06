import react from "react";
import "./CreateTicket.css"
function Hero(){
    return (
        <>
        <div className="container-fluid" style={{backgroundColor:"#0464f5ff", color:"white", height:"400px"}}> 
            <div className="row p-5"> 
                <div className="col fs-5" style={{marginLeft:"200px"}}>Support Portal</div>
                <div className="col fs-6"><a style={{color:"white", marginLeft:"230px"}}href="#"><u>Track Ticket</u></a></div>
            </div>
            <div className="row p-3"> 
                <div className="col cc">
                    <p className="fs-4" style={{width:"70%", marginLeft:"235px"}}> Search for an answer or browse help topics to create a ticket</p>
                    <input type="text" style={{backgroundColor:"white", width:"60%", height:"60px", border:"none", borderRadius:"5px", marginLeft:"235px"}} placeholder="Eg: how do I activate F&O, why is my order getting rejected."></input>
                    <a href="#"  className="mt-2"style={{fontSize:"13px", marginLeft:"235px"}}>Track account opening</a>
                    <a href="#" className="ms-2" style={{fontSize:"13px"}}>Track segment activation</a>
                  
                    <a href="#"className="ms-2" style={{fontSize:"13px"}}>Intraday</a>
                      <br />
                    <a href="#"  style={{fontSize:"13px",  marginLeft:"235px"}}>margins</a>
                    <a href="#" className="ms-2" style={{fontSize:"13px"}}>Kite user manual</a>




                </div>
                <div className="col fs-6 cc">
                      <p className="fs-4" style={{width:"70%", marginLeft:"155px"}}> Featured</p>
                      <ol style={{marginLeft:"155px", marginTop:"-10px"}}>
                      <li><a href="#"style={{fontSize:"15px"}}>Current Takeovers and Delisting- January 2024</a></li>
                    
                   <li className="mt-2"><a href="#" className="ms-2" style={{fontSize:"15px"}}>Latest Intraday leverages- MIS & CO</a></li> 
                 
          </ol>
                </div>
            </div>
               
        </div>
        
        </>
    )
}
export default Hero;