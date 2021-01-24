import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap'
import { BrowserRouter } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import {useFetch } from './useFetch';
import csvToJSON from "./csvToJSON"
import {Detalii} from "./Detalii"
import top from './assets/up-arrow.png'


const urlSubMenu="https://raw.githubusercontent.com/kmagdi/kt-data/main/submenu.csv"
const urlFoto="https://raw.githubusercontent.com/kmagdi/kt-data/main/"

export const Infintare=({menuid,menuName})=>{
  /*console.log('menuid='+menuid)*/
  const {data,loading}=useFetch(urlSubMenu)
  const [subMenuData,setSubMenuData]=useState({})

  const submenu=csvToJSON(String(data), ';')
  let filteredSubMenu=submenu.filter(e=>e.menuid==menuid)

    return(
    <React.Fragment>
        <h2 className="display-4 text-white">{menuName}</h2>
     {/*   <p className="lead text-white mb-0">...valami szöveg...   </p>*/}
        <div className="separator"></div>
        <div className="row text-white justify-content-center">
            {filteredSubMenu.map(e=>
                <div key={e.submenuid} className="flex-container">
                    <div className="box">
                    <Card>
                        <Card.Img variant="top" src={urlFoto+e.foto+'.jpg'} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text className="font-italic text-muted">{e.name}</Card.Text>
                            <Button variant="primary" id={e.submenuid} onClick={()=>setSubMenuData(e)}>
                                <BrowserRouter>
                                    <HashLink to="#detalii" className="hashLink">Detalii...</HashLink>
                                </BrowserRouter>
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            )
            }
        </div>
        <div className="separator"></div>
        <div id="detalii">
         {Object.keys(subMenuData).length != 0 ? <Detalii subMenuData={subMenuData} /> : ""}
         <div className="text-right">
             <BrowserRouter>
                <HashLink to="#top"><img src={top} width="30px" alt="top"/></HashLink>
             </BrowserRouter>
         </div>
        </div>
    

    </React.Fragment>
    )
}