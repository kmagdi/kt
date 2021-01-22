import React, { useState } from 'react';
import {Card,Button} from 'react-bootstrap'
import {useFetch } from './useFetch';
import csvToJSON from "./csvToJSON"
import {Detalii} from "./Detalii"

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
                <div className="col-lg-2 pl-2 pb-2">
                    <Card style={{ width: '12rem' }}>
                    <Card.Img variant="top" src={urlFoto+e.foto+'.jpg'} width={'100px'} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text className="font-italic text-muted">
                            {e.name}
                        </Card.Text>
                        <Button variant="primary" id={e.submenuid} onClick={()=>setSubMenuData(e)}>Detalii...</Button>
                    </Card.Body>
                    </Card>
                </div>
            )
            }
        </div>
        <div className="separator"></div>
      
        <Detalii subMenuData={subMenuData} />
    

    </React.Fragment>
    )
}