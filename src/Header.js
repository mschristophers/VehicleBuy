import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{ favorite, user }] = useStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/" className="header__link">
                <p className="header__logo">VehicleBuy</p>
            </Link>

            {/*Search Box*/}
            <div className="header__search">
                <input type="text" className="header__searchInput"/>
                <SearchIcon className="header__searchIcon" style={{ fontSize: 30 }} />
            </div>

            {/*Links*/}
            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link"> {/* Redirects if logged in */}
                    <div onClick={login} className="header__option">
                        <span className="header__option1stLine">Hello {user}!</span>
                        <span className="header__option2ndLine">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to="/favorites" className="header__link">
                    <div className="header__optionFav">
                        {/*Heart icon*/}
                        <FavoriteIcon style={{ fontSize: 40 }} />
                        {/*No. of favorites*/}
                        <span className="header__option2ndLine header__favCount">{favorite?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;