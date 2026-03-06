import react from "react";
function Brokerage(){
    return(
        <>
        <div className="container mt-5">
            <div className="row mt-5">
                <div className="col-8 p-5">
                    <a className="text-center" href="#" style={{color:'#0464f5ff', fontSize:"20px", marginLeft:"240px"}}> Brokerage calculator</a>
                    <ul className="mt-4 text-muted">
                        <li style={{fontSize:"12px"}} className="mt-3"> Call & Trade and RMS auto-squareoff: Addition charges of &#8377;50 + GST per order.</li>
                        <li style={{fontSize:"12px"}} className="mt-3"> Digital contract notes will be sent via e-mail.</li>
                        <li style={{fontSize:"12px"}} className="mt-3"> Physical copies of contract notess, if required, shall be charged &#8377;20 per contract note. Courier charges apply.</li>
                        <li style={{fontSize:"12px"}} className="mt-3"> For NRI account (non-PIS), 0.5% or #8377;100 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"12px"}} className="mt-3"> For NRI account (non-PIS), 0.5% or #8377;200 per executed order for equity (whichever is lower).</li>
                        <li style={{fontSize:"12px"}} className="mt-3"> If the account is in debt balance, any order placed will be charged &#8377;40 per executed order instead of &#8377;20 per executed order.</li>
                    </ul>
                </div>
                <div className="col-4 p-5">
                <a  className="text-center" href="#" style={{color:'#0464f5ff', fontSize:"20px"}}>List of charges</a></div>
            </div>
        </div>
        </>
    )


}
export default Brokerage;