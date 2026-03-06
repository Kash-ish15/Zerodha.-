import React from 'react';
function Education() {
    return ( 
        <div className = "container">
            <div className = "row">
                <div className = "col-6">
<img src="./media/education.svg" alt="education"></img>
                </div>
                <div className = "col mt-5 ">
                    <h2> Free and open market education</h2>
                    <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading</p>
                    <a href="#" style={{textDecoration: "none"}}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className = "mt-3"> TradingQ&A, the most active trading and investment market related queries.</p>
                     <a href="#" style={{textDecoration: "none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                     

                </div>
            </div>
        </div>

       
    );
}

export default Education;
