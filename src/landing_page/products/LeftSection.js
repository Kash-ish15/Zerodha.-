import react from "react";
import { useNavigate } from "react-router-dom";

function LeftSection({imgUrl, title, description, link1, link2, img1, img2}){
    const navigate = useNavigate();
    
    const handleLinkClick = (e, linkType) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (linkType === "link1") {
            if (link1 === "Try Demo") {
                // Check if user is authenticated
                const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
                const userEmail = localStorage.getItem("userEmail");
                const username = localStorage.getItem("username");
                
                if (isAuthenticated) {
                    // User is logged in, redirect to dashboard with auth credentials and user info
                    let authUrl = `http://localhost:3001?auth=true`;
                    if (userEmail) {
                        authUrl += `&email=${encodeURIComponent(userEmail)}`;
                    }
                    if (username) {
                        authUrl += `&username=${encodeURIComponent(username)}`;
                    }
                    window.location.href = authUrl;
                } else {
                    // User is not authenticated, redirect to login page
                    navigate("/login");
                }
            } else if (link1 === "Learn More") {
                // Determine product based on title
                let product = title.toLowerCase().replace(/\s+/g, '-');
                // Handle special cases
                if (title.toLowerCase().includes("varsity")) {
                    product = "varsity";
                }
                navigate(`/learnmore?product=${product}`);
            }
        } else if (linkType === "link2") {
            if (link2 && link2.trim() === "Learn More") {
                // Determine product based on title
                let product = title.toLowerCase().replace(/\s+/g, '-');
                // Handle special cases
                if (title.toLowerCase().includes("varsity")) {
                    product = "varsity";
                }
                navigate(`/learnmore?product=${product}`);
            }
        }
    };

    return (
        <div className="container">
       <div className="row p-5">
        <div className="col-6">
            <img  src={imgUrl} alt="kite"></img>
        </div>
        <div className="col"></div>
        <div className="col-5 mt-5">
            <h2> {title}</h2>
            <p className="text-muted" style={{fontSize:"12px"}}> {description} </p>
            <a 
                href="#"
                onClick={(e) => handleLinkClick(e, "link1")}
                style={{color:"#0464f5ff", cursor: "pointer", textDecoration: "none"}}
            > 
                {link1} <i class="fa-solid fa-arrow-right"></i>
            </a>   

            {link2 && (
                <a 
                    href="#" 
                    className="ms-5" 
                    onClick={(e) => handleLinkClick(e, "link2")}
                    style={{color:"#0464f5ff", cursor: "pointer", textDecoration: "none"}}
                > 
                    {link2} <i class="fa-solid fa-arrow-right"></i>
                </a>
            )}
            <div className="row mt-4">            
                <div className="col-4"><img src={img1} alt="appstore"></img></div>
            <div className="col"><img src={img2} alt="google play"></img></div>
          </div>
        </div>
       </div>

    </div>

    )
}
export default LeftSection;