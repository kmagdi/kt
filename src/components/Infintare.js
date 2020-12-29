import React from 'react';
import {Card,Button} from 'react-bootstrap'
import infintare1 from './assets/infintare1.jpg'
import infintare2 from './assets/infintare2.jpg'
import infintare3 from './assets/infintare3.jpg'
import infintare4 from './assets/infintare4.jpg'
import infintare5 from './assets/infintare5.jpg'


export const Infintare=()=>{
    return(
        <React.Fragment>
        <h2 className="display-4 text-white">Infintare firme</h2>
          <p className="lead text-white mb-0">...valami szöveg...   </p>
          <p className="lead text-white">...valami szöveg...          </p>
          <div className="separator"></div>

          <div className="row text-white">

            <div className="col-lg-3 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={infintare1} width={'100px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="font-italic text-muted">
                  Infintare SRL
                </Card.Text>
                <Button variant="primary">Detalii...</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="col-lg-3 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={infintare2} width={'100px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="font-italic text-muted">
                  Infintare SRL-D
                </Card.Text>
                <Button variant="primary">Detalii...</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="col-lg-3 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={infintare3} width={'100px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="font-italic text-muted">
                  Infintare PFA
                </Card.Text>
                <Button variant="primary">Detalii...</Button>
              </Card.Body>
            </Card>
        </div>
        <div className="col-lg-3 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={infintare4} width={'100px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="font-italic text-muted">
                  Infintare II
                </Card.Text>
                <Button variant="primary">Detalii...</Button>
              </Card.Body>
            </Card>
        </div>
        </div>
        <div className="row pt-2">
        <div className="col-lg-3 ">
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={infintare5} width={'100px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text className="font-italic text-muted">
                  Infintare SRL
                </Card.Text>
                <Button variant="primary">Detalii...</Button>
              </Card.Body>
            </Card>
        </div>
        </div>
         </React.Fragment>
    )
}