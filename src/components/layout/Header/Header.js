import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [page, setActive] = useState("home");

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const handleActivePage = (page) => setActive(page);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Cookie click
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={page === "home" ? "nav-link active" : "nav-link "}
                  aria-current="page"
                  onClick={() => handleActivePage("home")}
                >
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/achievements"
                  className={
                    page === "achievements" ? "nav-link active" : "nav-link "
                  }
                  onClick={() => handleActivePage("achievements")}
                >
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/shop"
                  className={page === "shop" ? "nav-link active" : "nav-link "}
                  onClick={() => handleActivePage("shop")}
                >
                  Shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
