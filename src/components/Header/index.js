import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div>
              <a className="socialIcon">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="socialIcon">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a className="phoneIcon">
                <i className="fa-light fa-phone-rotary me-1"></i>09381655200
              </a>
            </div>
            <div>
              <ul className={nav ? ["navbar-nav", "active"].join(" ") : "navbar-nav"}>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    تماس با ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="/blog">
                    وبلاگ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    درباره‌ ما
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">
                    نوع ملک <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-ul">
                    <li>
                      <Link to="#">آپارتمان</Link>
                    </li>
                    <li>
                      <Link to="#">ویلا</Link>
                    </li>
                    <li>
                      <Link to="#">زمین</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    خانه
                  </Link>
                </li>
              </ul>
            </div>
            <div onClick={() => setNav(!nav)} className="mobil-toggle">
              {nav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
