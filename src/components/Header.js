import React from "react";
import { Link } from "react-router-dom";

export default function Header({ isLoggedIn, cartItemsCount }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
            <span className="cart-badge">{cartItemsCount}</span>
          </li>
          <li>
            <Link to="/product-list">Product List</Link>
          </li>
          {!isLoggedIn ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
