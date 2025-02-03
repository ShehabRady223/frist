import React from 'react'
import style from './navbar.module.css'
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return <>
        <nav className={`${style.nvnv} navbar navbar-expand-lg z-3`}>
            <div className="container">
                <Link className={`${style.b} navbar-brand text-uppercase`} to="">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-uppercase">
                        <NavLink className={`${style.l} mx-3 nav-link`} aria-current="page" to="about">about</NavLink>
                        <NavLink className={`${style.l} mx-3 nav-link`} to="portfolio">portfolio</NavLink>
                        <NavLink className={`${style.l} mx-3 nav-link`} to="contact">contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    </>
}
