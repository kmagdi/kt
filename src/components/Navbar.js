import './Navbar.css'
import React, { useState } from 'react'
import {Acasa} from "./Acasa"
import { Mine } from './Mine'
import {Infintare} from './Infintare'
import {Modificare} from './Modificare'
import {Radiere} from './Radiere'
import{Contact} from './Contact'
import {Traducere} from './Traducere'
import {Consiliere} from './Consiliere'
import logo from './LOGO.jpg'
import foto from './foto1.png'

 const pages = {
    "1": Acasa,
    "2": Mine,
    "3":Infintare,
    "4":Modificare,
    "5":Radiere,
    "6":Traducere,
    "7":Consiliere,
    "8":Contact
  }
let activMenu='Acasa'
 
export const Navbar=({menu})=>{
    const [page,setPage]=useState('1')
    const [menuName,setmenuName]=useState("")

    const handleOnClick=(e)=>{
        console.log("e.target.id:"+e.target.id)
        setPage(e.target.id)
        setmenuName(e.target.text)
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
            {menu.map(e=>e.menuid ?
              <li className="nav-item">
                <a href="#content" onClick={handleOnClick} className="nav-link text-dark font-italic bg-light"id={e.menuid}>
                          <i className={e.submenu=="1"? "fa fa-spinner fa-spin mr-3 text-primary fa-fw" : "fa fa-th-large mr-3 text-primary fa-fw"} ></i>
                          {e.name}
                      </a>
              </li> : ''
            )}
          
          </ul> 
        </div>
        {/*<!-- End vertical navbar -->*/}     
    
        <div className="page-content p-5" id="content">
      
          <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2"></i><small className="text-uppercase font-weight-bold">Comutare</small></button>  
          {<Tagname menuid={page} menuName={menuName}/>}
     </div>
        </React.Fragment>  
    )
}