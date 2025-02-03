import React from 'react'
import style from './contact.module.css'

export default function Contact() {
    return (
        <div className={`${style.b} vh-100 d-flex justify-content-center flex-column`}>
            <div className="pt-4 text-center container">
                <h1 className={`${style.h} mb-3 text-uppercase`}>conatct section</h1>
                <div className=" d-flex align-items-center justify-content-center">
                    <span className={`${style.line}`}></span>
                    <i className="fa-solid fa-star mx-2"></i>
                    <span className={`${style.line}`}></span>
                </div>
                <div className='mt-5'>
                    <div class="form-floating mb-3 m-auto">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">userName</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="number" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">userAge</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">userEmail</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">userPassword</label>
                    </div>
                    <button className='btn btn-info'>send Message</button>
                </div>
            </div>
        </div>
    )
}
