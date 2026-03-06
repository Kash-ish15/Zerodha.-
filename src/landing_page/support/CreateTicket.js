import react from "react";
import  "./CreateTicket.css";
function CreateTicket(){
    return(
        <div className="container p-5">
        
       <h4>To create a ticket, select a relevant topic</h4>
       <div className="row mt-4">
        <div className="col">
            <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-solid fa-circle-plus"></i> &nbsp;  Account Opening</p>
            <ul className="mt-5 one">
                <li className="mt-3"><a style={{
    color: "#0464f5ff"
}} href="#">Online Account Opening</a></li>
                <li className="mt-3"><a href="#" className="lisa">Offline Account Opening</a></li>
                <li className="mt-3"><a href="#" className="lisa">Company, Partnership and HUF Account Opening</a></li>
                <li className="mt-3"><a href="#" className="lisa">NRI Account Opening</a></li>
                <li className="mt-3"><a href="#" className="lisa">Charges at Zerodha</a></li>
                <li className="mt-3"><a href="#" className="lisa">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                <li className="mt-3"><a href="#" className="lisa">Getting Started</a></li>
                    
            </ul>
        </div>
        <div className="col">
        <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-solid fa-user"></i>  &nbsp; Your Zerodha Account</p>
         <ul className="mt-5 one">
                <li className="mt-3"><a href="#"  className="lisa">Login Credentials</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Account Modification and Segment Addition</a></li>
                <li className="mt-3"><a href="#"  className="lisa">DP ID and bank details</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Your Profile</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Transfer and conversion of shares</a></li>
                </ul>
        </div>
        <div className="col">
        <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-solid fa-chart-column"></i>   &nbsp; Your Zerodha Account</p>
         <ul className="mt-5 one">
                <li className="mt-3"><a href="#"  className="lisa">Margin/leverage, Product and Order types</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Kit Web and Mobile</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Trading FAQs</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Corporate Actions</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Sentinel</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Kite API</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Pi and other platforms</a></li>
                  <li className="mt-3"><a href="#"  className="lisa">Stockreports+</a></li>
                    <li className="mt-3"><a href="#"  className="lisa">GTT</a></li>

            </ul>

        </div>


        </div>
         <div className="row mt-4">
        <div className="col">
            <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-regular fa-credit-card"></i> &nbsp; Funds</p>
            <ul className="mt-5 one">
                <li className="mt-3"><a href="#"  className="lisa">Adding Funds</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Fund Withdrawal</a></li>
                <li className="mt-3"><a href="#"  className="lisa">eMandates</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Adding Bank Accounts</a></li>
               
                    
            </ul>
        </div>
        <div className="col">
        <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-solid fa-spinner"></i> &nbsp; Console</p>
         <ul className="mt-5 one">
                <li className="mt-3"><a href="#"  className="lisa">Reports</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Ledger</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Portfolio</a></li>
                <li className="mt-3"><a href="#"  className="lisa">60 Day Challenge</a></li>
                <li className="mt-3"><a href="#"  className="lisa">IPO</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Referral Program</a></li>
                </ul>
        </div>
        <div className="col">
        <p className="ms-4" style={{fontSize: "18px"}}> <i class="fa-solid fa-chart-column"></i>   &nbsp; Coin</p>
         <ul className="mt-5 one">
                <li className="mt-3"><a href="#"  className="lisa">Understanding Mutual Funds</a></li>
                <li className="mt-3"><a href="#"  className="lisa">About Coin</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Buying and Selling through Coin</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Starting an SIP</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Managing your Portfolio</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Coin App</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Moving to Coin</a></li>
                <li className="mt-3"><a href="#"  className="lisa">Government Securities</a></li>

            </ul>

        </div>


        </div>


        </div>
    )
}
export default CreateTicket;