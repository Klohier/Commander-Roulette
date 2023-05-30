import { Link } from "react-router-dom";




export default function Navbar(){
return(
    <nav>
            <ul>
                {/* <li className="fa-solid fa-dice-d20 fa-2x"></li> */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/chosen">Chosen</Link></li>
                {/* <li><a href="favorite.html" className="desktop-nav fa-solid fa-star">Chosen</a></li> */}
                {/* <li><a href="#" className="desktop-nav fa-solid fa-user">Log In</a></li>? */}
            {/* <li id="icon" className="hamburger-menu fa-solid fa-bars fa-2x"></li> */}
            </ul>
            
        </nav>
)

}