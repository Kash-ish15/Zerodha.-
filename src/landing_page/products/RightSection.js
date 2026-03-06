import react from "react";
import { useNavigate } from "react-router-dom";

function RightSection({title, description, link1,  img1}){
    const navigate = useNavigate();
    
    const handleLinkClick = (e) => {
        e.preventDefault();
        if (link1 === "Learn More") {
            // Determine product based on title
            let product = title.toLowerCase().replace(/\s+/g, '-');
            // Handle special cases
            if (title.includes("Kite Connect")) {
                product = "kite-connect";
            }
            navigate(`/learnmore?product=${product}`);
        }
    };
    
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-6" style={{marginTop:"150px"}}>
                    <h1>{title}</h1>
                    <p style={{width:"70%"}} className="text-muted">{description}</p>
                <br />
                <a 
                    href="#" 
                    onClick={handleLinkClick}
                    style={{textDecoration : "none", color:"#0464f5ff", cursor: "pointer"}}
                >
                    {link1} <i class="fa-solid fa-arrow-right"></i>
                </a>
                </div>
                <div className="col-6 mt-5">
                    <img src={img1} alt="console"></img>                </div>
        </div>
    </div>
    )
}
export default RightSection;