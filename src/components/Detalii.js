import React, { useState,useEffect } from "react";
import {useFetch } from './useFetch';
import csvToJSON from "./csvToJSON"
const urlLegislatie="https://raw.githubusercontent.com/kmagdi/kt-data/main/legislatie.csv"
const urlActe="https://raw.githubusercontent.com/kmagdi/kt-data/main/acte.csv"


export const Detalii = ({ subMenuData }) => {
  //console.log(Object.keys(subMenuData));
  const {data,loading}=useFetch(urlLegislatie)
  const [dataActe,setDataActe]=useState([])

  const legislatie=csvToJSON(String(data), ';')
//legislatie.forEach(e=>console.log("legislatie:"+e.menuid+" sub:"+e.submenuid))
  let filteredLegislatie=legislatie.filter(e=>e.menuid==subMenuData.menuid && e.submenuid==subMenuData.submenuid)

useEffect(()=>{
 fetch(urlActe)           
            .then(resp=>resp.text())
            .then(text=>{ 
                //const acteJSON=csvToJSON(text, ';')
                //console.log(acteJSON[0].menuid)
                setDataActe(csvToJSON(text, ';'))
            })
    
})
    
  //dataActe.forEach(e=>console.log("acte:"+e.menuid+" sub:"+e.submenuid))
  let filteredActe=dataActe.filter(e=>e.menuid==subMenuData.menuid && e.submenuid==subMenuData.submenuid)

  return (
    <React.Fragment>
        <div className="row text-white justify-content-center">
            <h2 className="display-4 text-white">{subMenuData.name}</h2>
        </div>
        <div className="row text-white justify-content-center">
          
     
          <p className="lead">{subMenuData.descriere}</p>
          <p className="lead">{subMenuData.termen} </p>
          <p className="lead">{subMenuData.text1} </p>
          <p className="lead">{subMenuData.text2} </p>

          <div className="bg-white p-5 rounded my-5 shadow-sm">
            <label className="lead font-italic mb-0 text-muted">Legislatie:</label>
            <ul>
            {filteredLegislatie.map(e=>
                <li key={e.id} className="lead font-italic mb-0 text-muted">{e.text} ...</li>
              )}
            
           </ul>
          </div>

          <label className="lead ">Acte necesare:</label>
        <ol>
            {filteredActe.map(e=>
                <li key={e.id} className="lead ">{e.text} ...</li>
              )}
            
           </ol>
        </div>

    </React.Fragment>
  );
};
