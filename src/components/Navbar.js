import React from 'react';
import { Link } from 'gatsby';
import './navbar.css'

const Navbar = (props) => {
    const navMenuItem = ["Projects", "Twitter"];

    const navMenuLiTag = navMenuItem.map((item) => {
        let pageLink = "";
         
        if (item === "Projects") {
            pageLink ="/Projects/"
        }
        else if (item === "Twitter") {
            pageLink ="https://twitter.com/Laurin_Wirth"
        }
        else pageLink = "/" + item.toLowerCase() + "/";

        return (
            <li key={pageLink}>
                <Link to={pageLink}
                    className="page-link"
                    style={{
                        boxShadow: `none`,
                        textDecoration: `none`,
                        color: `inherit`,
                    }}
                >
                    {item}
                </Link>
            </li>
        )
    });

    return (
        <nav className="navbar">
            <div className="navbar-item">
                <ul>
                    {navMenuLiTag}
                </ul>
               
            </div>
        </nav>
        
    );
}

export default Navbar;