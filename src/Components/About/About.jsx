import React from 'react'
import style from './About.module.css'

export default function About() {
    return (
        <div className={`${style.b} home vh-100 w-100 d-flex justify-content-center align-items-center flex-column`}>
            <div className="pt-4 text-center text-white container">
                <h1 className={`${style.h} mb-3 text-uppercase`}>about component</h1>
                <div className="bt d-flex align-items-center justify-content-center">
                    <span className={`${style.line}`}></span>
                    <i className="fa-solid fa-star mx-2"></i>
                    <span className={`${style.line}`}></span>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <p className={`${style.s}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p className={`${style.s}`}>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
