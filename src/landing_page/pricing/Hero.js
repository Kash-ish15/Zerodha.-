import react from "react";

function Hero(){
    // Properly URL encode filenames - space becomes %20, ( becomes %28, ) becomes %29
    const pricingImg1 = "/media/pricing0%20%282%29.svg";
    const pricingImg2 = "/media/intradayTrades%20%283%29.svg";
    
    return (
        <>
        <h2 className="mt-5 text-center">Pricing</h2>  
        <p className="text-center"> Free equity and flat &#8377;20 intraday and F&O trades</p>
         <div className="row">
         <div className="col p-4">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', alignItems: 'center', minHeight: '150px'}}>
            <img 
                style={{width:"70%", maxWidth: "200px", height: "auto"}} 
                src={pricingImg1}
                alt="Free equity delivery"
                onError={(e) => {
                    // Fallback: try without URL encoding
                    e.target.onerror = null;
                    e.target.src = "/media/pricing0 (2).svg";
                }}
            />
          </div>
          <h4 className="text-center">Free equity delivery</h4>
          <p className="text-center text-muted mt-2" style={{fontSize: "14px"}}>
            All equity delivery investments (NSE, BSE), are absolutely free - &#8377; 0 brokerage.
          </p>
        </div>
         <div className="col p-4">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', alignItems: 'center', minHeight: '150px'}}>
            <img 
                style={{width:"70%", maxWidth: "200px", height: "auto"}} 
                src={pricingImg2}
                alt="Intraday and F&O trades"
                onError={(e) => {
                    // Fallback: try without URL encoding
                    e.target.onerror = null;
                    e.target.src = "/media/intradayTrades (3).svg";
                }}
            />
          </div>
           <h4 className="text-center">Intraday and F&O trades</h4>
          <p className="text-center text-muted mt-2" style={{fontSize: "14px"}}>
            Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades.
          </p>
        </div>
         <div className="col p-4">
          <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem', alignItems: 'center', minHeight: '150px'}}>
            <img 
                style={{width:"70%", maxWidth: "200px", height: "auto"}} 
                src={pricingImg1}
                alt="Free direct mutual funds"
                onError={(e) => {
                    // Fallback: try without URL encoding
                    e.target.onerror = null;
                    e.target.src = "/media/pricing0 (2).svg";
                }}
            />
          </div>
          <h4 className="text-center">Free direct MF</h4>
          <p className="text-center text-muted mt-2" style={{fontSize: "14px"}}>
            All direct mutual fund investments are absolutely free - &#8377;0 commissions free & DP charges.
          </p>
        </div>
      </div>
        </>
    )
}
export default Hero;