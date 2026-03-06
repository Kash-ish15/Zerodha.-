import React from 'react';
function Awards() {
    return ( 
       <div className="container">
        <div className="row">
                  <div class="col-6 mt-7">
               <img src='./media/Largestbroker.svg' alt="largestbroker"></img>

            </div>
            <div class="col-6 mt-5">
                <h1 class="mr-3"> Largest stock broker in India</h1>
                <p  style={{width:'90%'}}>2+ million Brisko clients contribute to over 15% of all retail order
            volumes in India daily by trading and investig in:</p>
            <div class='row'>
                <div class='col-6'>
                <ul>
                    <li><p>Futures and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency derivatives</p></li>
                </ul>
                </div>
             
                <div class='col-6'>
                  <ul>
                    <li><p>Stock & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and govt. securities</p></li>
                </ul>
                </div>
            <img style={{width:'90%'}} 
            class="mt-3"src="/media/pressLogos.png" alt="presslogo"></img>


            </div>
           



               
               </div>
        </div>
        </div>
     );
}

export default Awards;