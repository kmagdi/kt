import './Navbar.css'
 import React, { useState } from 'react'
 import {Acasa} from "./Acasa"
import { Mine } from './Mine'
import {Infintare} from './Infintare'
import {Modificare} from './Modificare'
import {Radiere} from './Radiere'
import{Contact} from './Contact'
import logo from './LOGO.jpg'
import foto from './foto1.png'

 const pages = {
    "Acasa": Acasa,
    "Mine": Mine,
    "Modificare":Modificare,
    "Radiere":Radiere,
    "Contact":Contact,
    "Infintare":Infintare

  }

 
export const Navbar=()=>{
    const [page,setPage]=useState('Acasa')

    const handleOnClick=(e)=>{
        console.log(e.target.id)
        setPage(e.target.id)
    }
    let Tagname =pages[page]
    return(
      <React.Fragment>  
        <div className="vertical-nav bg-white" id="sidebar">
            <div className="py-4 px-3 mb-4 bg-light">
                <div className="media d-flex align-items-center"><img src={foto} alt="..." width="65" className="mr-3 rounded-circle img-thumbnail shadow-sm"/>
                    <div className="media-body">
                        <h4 className="m-0">Kátay Tibor</h4>
                        <p className="font-weight-light text-muted mb-0">Jurist cu experienta</p>
                    </div>
                </div>
            </div>
        
          <p className="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0"><img src={logo} alt="..." width="100%" /></p>
        
          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="#content" onClick={handleOnClick} className="nav-link text-dark font-italic bg-light"id="Acasa">
                        <i className="fa fa-th-large mr-3 text-primary fa-fw" ></i>
                        Acasa
                    </a>
            </li>
            <li className="nav-item">
              <a href="#content" onClick={handleOnClick} className="nav-link text-dark font-italic"id="Mine">
                        <i className="fa fa-address-card mr-3 text-primary fa-fw" ></i>
                        Despre mine
                    </a>
            </li>
            <li className="nav-item">
              <a href="#content"onClick={handleOnClick} className="nav-link text-dark font-italic"id="Infintare">
                        <i className="fa fa-spinner fa-spin mr-3 text-primary fa-fw" ></i>
                        Infintare firme
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic"id="Modificare">
                        <i className="fa fa-spinner fa-spin mr-3 text-primary fa-fw" ></i>
                        Modificare firme
                    </a>
            </li>
        
        
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic"id="Radiere">
                        <i className="fa fa-spinner fa-spin mr-3 text-primary fa-fw" ></i>
                        Radiere firme
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic"id="Traduceri">
                        <i className="fa fa-spinner fa-spin mr-3 text-primary fa-fw" ></i>
                        Traduceri
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic"id="Consiliere">
                        <i className="fa fa-spinner fa-spin mr-3 text-primary fa-fw" ></i>
                        Copnsiliere gratuita
                    </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic"id="Contact">
                        <i className="fa fa-bell mr-3 text-primary fa-fw" ></i>
                        Contact
                    </a>
            </li>
          </ul> 
        </div>
        {/*<!-- End vertical navbar -->*/}
        
    
        <div className="page-content p-5" id="content">
      
          <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">Comutare</small></button>
        
         
          {<Tagname />}
     </div>
        
        </React.Fragment>
       
        

    )
}