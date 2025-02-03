import React from 'react'
import style from './footer.module.css'

export default function Footer() {
    return <>
        <footer className=''>
            <div className="container text-center py-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="loc">
                            <h3>Location</h3>
                            <p>2215 John Daniel Drive Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="sc">
                            <h3>Around the Web</h3>
                            <ul className='list-unstyled d-flex justify-content-evenly'>
                                <i className={`${style.c} fa-brands fa-facebook`}></i>
                                <i className={`${style.c} fa-brands fa-twitter`}></i>
                                <i className={`${style.c} fa-brands fa-linkedin`}></i>
                                <i className={`${style.c} fa-brands fa-github`}></i>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="free">
                            <h3>About Freelancer</h3>
                            <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap</p>
                        </div>
                    </div>
                </div>
            </div>
        <div className={`${style.copy} text-white text-center py-3`}>
        <p>Copyright © Your Website 2021</p>
        </div>
        </footer>
    </>
}
