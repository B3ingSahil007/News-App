import React, {useEffect} from 'react'
import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname);
    }, [location]);
    return (
        <>
            <nav style={{ borderBottom: "1px white solid" }} className=" navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand mx-3" to="/">The Daily Meme</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={{ marginLeft: "2cm" }} className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/general" ? "active" : ""}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/health" ? "active" : ""}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link mx-2 ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
