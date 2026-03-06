import react from "react";
import Hero from "./Hero.js";
import OpenAccount  from "../../OpenAccount";
import Brokerage from "./Brokerage.js";
function PricingPage(){
    return(
    <div className="container">
       <Hero />
       <OpenAccount />
       <hr className="mt-5"/>
       <Brokerage />
    </div>
    )
    }
export default PricingPage;