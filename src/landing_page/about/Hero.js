import react from "react";
function Hero(){
    return (
        <div className = "container">
        <div className= "row p-5 text-muted"  style={{fontSize:"1em"}}  >

           <h4 className = "text-center mt-5 ms-5" style={{width:"70%", paddingLeft : "260px", paddingTop : "60px"}}> We pioneered the discount broking model in India.
            Now, we are breaking ground with out technology. 
           </h4>
           <hr style={{margin:"70px"}}></hr>
               <div className="col-6 p-5"  style={{marginLeft:"100px", width:"40%"}}>
                   <p>
                       We kick-started operations on the 15th of August, 2010 with the goal
                       of breaking all barriers that traders and investors face in India in
                       terms of cost, support, and technology. We named the company
                       Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
                       barrier.
                   </p>
         
         <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
         
          </div>
               <div className="col-6 p-5 "  style={{marginLeft:"100px",  width:"40%"}}>
         
       
    
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
          </div>

        </div>
    </div>
    )
}
export default Hero;