import React from "react"
import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <section className="footer">

            <div className="container">
                <div className="row flex-row-reverse text-end">
                    <div className="col-lg-3 col-md-6">
                        <Link to="/">
                            <div className="footer-logo-style">
                                <span className="ms-2">
                                    شاویلا
                                </span>
                                <i className="fas fa-home"></i>
                            </div>
                        </Link>
                        <span className="footer-other-text d-block mt-3 mb-3">
                        .لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است                      </span>
                        <div className="footer-social">
                            <a className='footer-social-item'><i className="fa-brands fa-instagram"></i></a>
                            <a className='footer-social-item'><i className="fa-brands fa-whatsapp"></i></a>
                            <a className='footer-social-item'><i className="fa-brands fa-facebook"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">فهرست</p>
                        <ul className="footer-ul">
                            <li>
                                <Link className="footer-link" to="/">خانه</Link>
                            </li>
                            <li>
                                <Link className="footer-link " to="/blog">وبلاگ</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/about">درباره‌ ما</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/contact">تماس با ما</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div>
                            <p className="footer-title">Categories</p>
                            <ul className="footer-ul">
                                <li>Category 1</li>
                                <li>Category 2</li>
                                <li>Category 3</li>
                                <li>Category 4</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <p className="footer-title">تماس با ما</p>
                        <ul className="footer-ul">
                            <li className="d-flex justify-content-end">
                                <span>08:00-18:00</span>
                                <div className="footer-info-item">
                                    <i className="fas fa-clock"></i>
                                </div>
                            </li>
                            <li className="d-flex justify-content-end">
                                <span>info@house.com</span>
                                <div className="footer-info-item" >
                                    <i className="fas fa-envelope"></i>
                                </div>
                            </li>
                            <li className="d-flex justify-content-end">
                                <span>مازندران - رامسر - رمک </span>
                                <div className="footer-info-item">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                            </li>
                            <li className="d-flex justify-content-end">
                                <span>01155264690</span>
                                <div className="footer-info-item">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <p className="footer-title">Subscribe</p>
                        <span className="footer-other-text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna
                        </span>
                        <div className="subscribe-area mb-2 mt-2">
                            <input type="text" placeholder="Email" className="inp-footer w-100" />
                        </div>
                        <button className="btn-subscribe">Subscribe</button>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default Footer