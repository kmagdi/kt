import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useFetch } from "./useFetch";
import csvToJSON from "./csvToJSON";

const urlSubMenu =
  "https://raw.githubusercontent.com/kmagdi/kt-data/main/submenu.csv";

export const Detalii = ({ subMenuData }) => {
  console.log(Object.keys(subMenuData));
  return (
    <React.Fragment>
        <div className="row text-white justify-content-center">
            <h2 className="display-4 text-white">{subMenuData.name}</h2>
        </div>
        <div className="row text-white justify-content-center">
          
        <div className="col-lg-7 border">
            
          <p className="lead">{subMenuData.descriere}</p>
          <p className="lead">{subMenuData.termen} </p>

          <div className="bg-white p-5 rounded my-5 shadow-sm">
            <p className="lead font-italic mb-0 text-muted">{subMenuData.text1} ...</p>
            <p className="lead font-italic mb-0 text-muted">{subMenuData.text2}... </p>
          </div>

          <p className="lead">Lorem dolor. </p>
          <p className="lead">Lorem </p>
          <p className="lead">Lorem dolor. </p>
        </div>

        <div className="col-lg-5 ">
          <p className="lead">Lorem dolor. </p>
          <p className="lead">Lorem </p>
          <p className="lead">Lorem dolor. </p>
        </div>
      
      </div>
    </React.Fragment>
  );
};
