import React from 'react'
import me from '../../assets/download.svg'
import style from './home.module.css'

export default function Home() {
    return (
        <>
            <div className={`${style.b} home vh-100 w-100 d-flex justify-content-center align-items-center flex-column`}>
                <img className={`${style.img} mb-3`} src={me} alt="" />
                <div className="tex pt-4 text-center text-white">
                    <h1 className={`${style.h} mb-3`}>start Framework</h1>
                    <div className="bt d-flex align-items-center justify-content-center">
                        <span className={`${style.line}`}></span>
                        <i className="fa-solid fa-star mx-2"></i>
                        <span className={`${style.line}`}></span>
                    </div>
                    <p className={`${style.s}`}>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </>
    )
}
