import React from 'react'
import '../css/style.css';
import {Link} from 'react-router-dom'
import logo from '../images/download.svg';
function Nav() {
    return (
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><span class="navbar-brand" href="#"> <img src ={logo} alt ="logo"/></span></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
    <li class="nav-item">
        <Link to ="/"><span class="nav-link" href="#"style={{width:"100px",backgroundColor:'#2a73cc',color:"#fff"}}>Explore&nbsp;&nbsp;<i class ="fa fa-chevron-down"></i></span></Link>
      </li>
      <li class="nav-item ml-auto">
        <Link to ="/login"><span class="nav-link" href="#">Login</span></Link>
      </li>
      <li class="nav-item ml-auto">
        <Link to ="/signup"><span class="nav-link" href="#">Signup</span></Link>
      </li>
    </ul>
    <form class="form-inline my-4 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    )
}

export default Nav
