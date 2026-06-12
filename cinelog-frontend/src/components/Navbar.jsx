import { Link } from "react-router-dom";
import "../css/Navbar.css"

function Navbar() {
    return (
        <nav className="navbar">
            <h1>Cinelog</h1>

            <ul className="links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </ul>
        </nav>
    );
}

export default Navbar