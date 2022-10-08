// import React from 'react'
// import CartWidget from '../CartWidget/CartWidget';
// import { styles } from "./Navbar.style";
// import logo from "../../assets/logo.png";

// children es una palabra reservada 
import React from "react"
import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ storeName, pages }) => {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid pe-lg-2 p-0">
                        <a className="navbar-brand fw-bold fs-3" href="./">{storeName}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    pages.map((page, index) => {
                                        const { id, path, text, active } = page;

                                        let classNameLink = "nav-link pe-3 me-4 fw-bold";
                                        classNameLink = active ? (classNameLink += " active") : classNameLink;

                                        return (<li key={id} className="nav-item">
                                            <a
                                                href={path}
                                                className={classNameLink}
                                                aria-current="page">
                                                {text}
                                            </a>
                                        </li>)
                                    })
                                }
                            </ul>
                            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
                                <li className=" nav-item pe-3">
                                    <a href="./" className="fas fa-heart">
                                        {/* <span className="num rounded-circle">1</span> */}
                                        <CartWidget />
                                    </a>
                                </li>
                                {/* <li className=" nav-item pe-3">
                                    <a href="./" className="fas fa-shopping-bag">
                                        <span className="num rounded-circle">3</span>
                                    </a>
                                </li>
                                <li className=" nav-item">
                                    <span className="">items:</span>
                                    <span className="fw-bold">$150.00</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar




