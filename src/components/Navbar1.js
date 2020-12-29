 import './Navbar.css'
 import React from 'react'
 
export const Navbar=()=>{
    return(
        <React.Fragment>
            <header className="header">
     <nav className="navbar navbar-expand-lg fixed-top py-3">
         <div className="container"><a href="#" className="navbar-brand text-uppercase font-weight-bold">Transparent Nav</a>
             <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
             
             <div id="navbarSupportedContent" className="collapse navbar-collapse">
                 <ul className="navbar-nav ml-auto">
                     <li className="nav-item active"><a href="#" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></a></li>
                     <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">About</a></li>
                     <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                     <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                     <li className="nav-item"><a href="#" className="nav-link text-uppercase font-weight-bold">Contact</a></li>
                 </ul>
             </div>
         </div>
     </nav>
 </header>
 
 
 
 <div className="container">
     <div className="pt-5 text-white">
         <header className="py-5 mt-5">
             <h1 className="display-4">Transparent Navbar</h1>
             <p className="lead mb-0">Using Bootstrap 4 and Javascript, create a transparent navbar which changes its style on scroll.</p>
             <p className="lead mb-0">Snippet by
                 <a href="https://bootstrapious.com" className="text-white">
                     <u>Bootstrapious</u></a>
             </p>
         </header>
         <div className="py-5">
             <p className="lead">Lorem ipsum dolor sit amet, <strong className="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong className="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
             <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
         <div className="py-5">
             <p className="lead">Lorem ipsum dolor sit amet, <strong className="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong className="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
             <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </div>
     </div>
 </div>
 
        </React.Fragment>
    )
}
 