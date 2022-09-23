import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
    function logout() {
        sessionStorage.clear();
        props.setName("");
        props.history.push("/");
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img src="https://i.ibb.co/w0BJt1L/cg-logo.png" alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="\">  Class 10</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="\"> Class 11-12</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="\" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    College
                                </Link>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="\">Professionals</Link></li>
                                    <li><Link className="dropdown-item" to="\">Study Abroad</Link></li>
                                    <li><Link className="dropdown-item" to="\"> Psychometric Test</Link></li>
                                    <li><Link className="dropdown-item" to="\"> Pricing</Link></li>
                                    <li><Link className="dropdown-item" to="\"> Events</Link></li>
                                    <li><Link className="dropdown-item" to="\">  918800442358</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <div class="d-flex">
                            {
                                props.name ? <Link to='/userInfo'>     <p className='login'>Hi {props.name}</p></Link> : <Link to='/login'>     <p className='login'>Login</p></Link>
                            }

                            {
                                props.name ? <Link to="/" className="n-u-i" onClick={logout}>
                                    <p>LogOut</p>
                                </Link> : <Link to="/register"><p className='login'>Register</p></Link>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header;