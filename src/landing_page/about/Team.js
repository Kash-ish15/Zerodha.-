import react from "react";
import { Link } from "react-router-dom";

function Team(){
    return (
             <div className = "container">
            <div className = "row">
                <h2 className="text-center mb-5">People</h2>
                <div className = "col-6" >
                 <img  style={{borderRadius:"50%", width:"40%", marginLeft:"45%"}} src="/media/nithinKamath.jpg" alt="Nithin Kamath" />
                 <p className="text-muted mt-4 text-center fs-5 fw-semibold" style={{marginLeft: "200px"}}> Nitin Kamath </p>
                 <p className="text-muted text-center fw-semibold"  style={{marginLeft: "200px"}}> Founder, CEO</p>
                </div>
                 <div className = "col mt-5" >
                    <p  className="text-muted" style={{width:"65%", fontSize:"15px"}}>Nitin bootstrapped and found zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed trading industry completely</p>
                    
                     <p className="text-muted" style={{width:"70%", fontSize:"15px"}}>He is a member of the SEBI Secondary Market Advisory Committee (MDAC).</p>
               
                     <p className="text-muted" style={{width:"70%", fontSize:"15px"}}> Playing basketball in his zen.</p>
                     <p className="text-muted"> Connect on <Link to="/" style={{color:'#0464f5ff', textDecoration:'none'}}>Homepage</Link> / <Link to="/tradingqa" style={{color:'#0464f5ff', textDecoration:'none'}}>TradingQ&A</Link> / <a href="https://x.com/Nithin0dha" target="_blank" rel="noopener noreferrer" style={{color:'#0464f5ff'}}>Twitter</a></p>
                </div>
            </div>
        </div>
    )
}
export default Team;