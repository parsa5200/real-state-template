import React from "react"
import './Header.scss'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact">تماس با ما</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " to="/blog">وبلاگ</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">درباره‌ ما</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="#">نوع ملک <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="#">آپارتمان</Link></li>
                                        <li><Link to="#">ویلا</Link></li>
                                        <li><Link to="#">زمین</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">خانه</Link>
                                </li>
                            </ul>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;