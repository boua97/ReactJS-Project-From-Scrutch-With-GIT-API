import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='container '>
      <nav class="navbar navbar-expand-lg navbar-light bg-light ms-auto">
  <a class="navbar-brand" href="#"><img src='\Imag3.png' /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      
    </ul>
   
    <form class="form-inline my-2 my-lg-0   ms-auto ">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    <form class="form-inline my-2 my-lg-0  ">
    <button class="btn btn-outline-success my-2 my-sm-2" type="submit">Search</button>
    </form>
  </div> 
</nav>
    </div>
  )
}

export default Navbar ;
