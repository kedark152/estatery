import "../styles/components/navbar.css";
import { useWishlist } from "../context/wishlist-context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export const NavBar = () => {
  const { wishlistState } = useWishlist();
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <nav className="navbar flex">
      <div className="flex-align-center gap-1">
        <p className="brand-logo flex-align-center gap-5px">
          <i className="material-icons">house</i>Estatery
        </p>
        <Link to="/" className={pathName === "/" ? `link active-link` : `link`}>
          Rent
        </Link>
        <Link
          to="/wishlist"
          className={pathName === "/wishlist" ? `link active-link` : `link`}
        >
          Wishlist
          <span className="wishlist-count">{wishlistState.length}</span>
        </Link>
      </div>
      <div className="flex gap-1">
        <p className="btn-login">Login</p>
        <p className="btn-signup">Signup</p>
      </div>
    </nav>
  );
};
