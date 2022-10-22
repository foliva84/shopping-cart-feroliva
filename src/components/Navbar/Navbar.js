// import React from 'react'
// import CartWidget from '../CartWidget/CartWidget';
// import { styles } from "./Navbar.style";
// import logo from "../../assets/logo.png";

// children es una palabra reservada 
import React from "react"
import CartWidget from "../CartWidget/CartWidget";
import { Link as LinkRRD } from "react-router-dom";

const Navbar = ({ storeName }) => {
      const categories = [
        { id: 0, text: "electronics ", path: "/categoria/electronics", active: true },
        { id: 1, text: "jewelery ",  path: "/categoria/jewelery", active: false },
        { id: 3, text: "men's clothing ", path: "/categoria/men's clothing", active: false },
        { id: 4, text: "women's clothing ", path: "/categoria/women's clothing", active: false },
    ]; 

    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid pe-lg-2 p-0">
                        <LinkRRD className="navbar-brand fw-bold fs-3" to="/">{storeName}</LinkRRD>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                {
                                    categories.map((category, index) => {
                                        const { id, path, text, active } = category;

                                        let classNameLink = "nav-link pe-3 me-4 fw-bold";
                                        classNameLink = active ? (classNameLink += " active") : classNameLink;

                                        return (<li key={index} className="nav-item">
                                            <LinkRRD
                                                key={category.id} 
                                                to={category.path}
                                                className={classNameLink}
                                                aria-current="page">
                                                {text}
                                            </LinkRRD>
                                        </li>)
                                    })
                                }
                            </ul>
                            <ul className="navbar-nav icons ms-auto mb-2 mb-lg-0">
                                <li className=" nav-item pe-3">
                                    <LinkRRD to="/cart" className="fas fa-heart">
                                        <CartWidget />
                                    </LinkRRD>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar




