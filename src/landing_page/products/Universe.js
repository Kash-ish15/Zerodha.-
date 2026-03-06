import react from "react";
import Hero from './Hero.js';
import LeftSection from './LeftSection.js';
import RightSection from './RightSection.js';
import {useNavigate} from 'react-router-dom';



function Universe(){
  const navigate = useNavigate();
  function handleclick(){
  navigate("../signup"); 
  }
    return (
    <>
    <Hero />
    <LeftSection 
      imgUrl="./media/kite(1).png"
      title="Kite"
      description="Our ultra-fast flagship trading platform with streaming marketing data, advanced charts, an elegant UI, and more. Enjoy the kite experience seamlessly on your Android and iOS devices."
      link1="Try Demo"
      link2=" Learn More"
      img1="./media/appstoreBadge(1).svg"
      img2="./media/googlePlayBadge.svg"
    />
    <RightSection 
    title="Console"
    description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations"
    link1="Learn More"
    img1={"./media/console.png"}
    />
      <LeftSection 
      imgUrl="./media/coin.png"
      title="Coin"
      description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience seamlessly on your Android and iOS devices "
      link1="Try Demo"
      link2=" Learn More"
      img1="./media/appstoreBadge(1).svg"
      img2="./media/googlePlayBadge.svg"
    />
      <RightSection 
    title="Kite Connect API"
    description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
    link1="Learn More"
    img1={"./media/kiteconnect1.png"}
    />
     <LeftSection 
      imgUrl="./media/varsity(1).png"
      title="Varsity mobile"
      description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
      link1="Try Demo"
      link2=" Learn More"
      img1="./media/appstoreBadge(1).svg"
      img2="./media/googlePlayBadge.svg"
    />
    
    <p className="text-center">Want to know more about our technology stack? Chcek out the Zerodha.tech blog</p>
    <h2 className="text-center mt-5">The Zerodha Universe</h2>
    <p className="text-center mt-4">Extend your trading and investment experience even further with our partner platforms</p>
    <div className="container">
      <div className="row p-5">
        <div className="col p-4">
          <img style={{width:"50%", marginLeft:"80px"}} src="./media/smallcaseLogo.png" alt="smallcase"></img>
         <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Thematic investment platform</p>

        </div>
         <div className="col p-4" >
 <img style={{width:"50%", marginLeft:"80px"}} src="./media/streakLogo.png" alt="smallcase"></img>
 <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Algo and strategy platform</p>

        </div>
         <div className="col p-4">
          <img style={{width:"50%", marginLeft:"80px"}} src="./media/sensibullLogo (1).svg" alt="smallcase"></img>
          <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Options trading platform</p>

        </div>
      </div>
      <div className="row">
        <div className="col p-4">
          <img style={{width:"50%", marginLeft:"80px"}} src="./media/zerodhaFundhouse.png" alt="smallcase"></img>
         <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Asset management</p>

        </div>
         <div className="col p-4" >
 <img style={{width:"50%", marginLeft:"80px"}} src="./media/goldenpiLogo.png" alt="smallcase"></img>
 <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Bonds trading platform</p>

        </div>
         <div className="col p-4">
          <img style={{width:"50%", marginLeft:"80px"}} src="./media/dittoLogo.png" alt="smallcase"></img>
          <p className="text-center text-muted mt-2" style={{fontSize:"12px"}}>Insurance</p>
 </div>
        </div>

     
      <button id= "one" className="btn btn-primary" style={{marginLeft:"600px"}} 
      onClick={handleclick}> Sign up now </button>
       
    </div>
   
  
    </>
    )
    }
export default Universe;