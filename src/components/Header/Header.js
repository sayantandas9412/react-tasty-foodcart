import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Header.styles.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

export default function Header({ currentUser }) {
  return (
    <div className="header-container">
      <div className="header-logo">
        <h1>TASTY</h1>
      </div>
      <div className="search-bar-container">
        <form className="form-search-bar">
          <input
            className="form-input"
            type="text"
            placeholder="Search items here..."
          />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} color="#2874f0" size="lg" />
          </button>
        </form>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>

          {currentUser ? (
            <li>
              <a onClick={() => auth.signOut()}>Sign Out</a>
            </li>
          ) : (
            <li>
              <Link to="/signin">Sign In</Link>
            </li>
          )}
        </ul>
        <span className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} size="lg" />
          Cart
        </span>
      </div>
    </div>
  );
}
