import React from 'react'
import style from './pro.module.css'
import img1 from '../../assets/download.png'
import img2 from '../../assets/download2.png'
import img3 from '../../assets/download 3.png'

export default function Portfolio() {
    return (
        <div className={`${style.b} pt-5 mt-5 d-flex justify-content-center flex-column`}>
            <div className="pt-4 text-center container">
                <h1 className={`${style.h} mb-3 text-uppercase`}>portfolio component</h1>
                <div className=" d-flex align-items-center justify-content-center">
                    <span className={`${style.line}`}></span>
                    <i className="fa-solid fa-star mx-2"></i>
                    <span className={`${style.line}`}></span>
                </div>
                <div className="row mt-1 mb-5 g-5">
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img1} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img3} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img2} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img1} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img3} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={`${style.item} rounded-3`}>
                            <img src={img2} className='w-100 rounded-3' alt="" />
                            <div className={`${style.layout} rounded-3 d-flex justify-content-center align-items-center`}>
                                <i class="text-white fa-solid fa-plus fa-6x"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
