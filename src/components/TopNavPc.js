import React from 'react'

import '../css/style.css';
import {Link} from 'react-router-dom'
import logo from '../images/download.svg';
function NewNav() {
    return (
        <div>
        <div class ="container-fluid pc-nav">
          <Link to="/"><span href="#"> <img src ={logo} alt ="logo"/></span></Link>
          <Link to="/"><span id="explorebtn">Explore&nbsp;&nbsp;<i class ="fa fa-chevron-down"></i></span></Link>
          <form id="search-form">
          <input type ="text"id="search-bar" placeholder="What do you want to learn ?"/>
          <button id ="explorebtn" style={{height:"60px;"}}><i class="fa fa-search"></i></button>
          </form>
          <Link to="/"><span id="joinforbtn" style={{float:"right"}}>Join for Free</span></Link>
          <Link to="/signup"><span style={{float:"right"}}>Sign up</span></Link>
          <Link to="/login"><span style={{float:"right"}}>Log in</span></Link>
          <Link to="/"><span style={{float:"right",color:"#000"}}>For Enterprise</span></Link>
        </div>

      {/* <div class ="hamburger" >
          <i class ="fa fa-bars animated bounceIn" id="ham"></i>
      </div>
      <div class ="cross">
      <i class ="fa fa-close animated bounceIn" id="close"></i>
      </div> */}
      {/* <div class="mobile-nav active animated slideInLeft">
          <div class ="sidebar">
          <div class ="brand-img">
            <Link to="/"><img src ={logo} alt=""/></Link>
        </div>
        <div class ="side-item"><Link to="/"><p>Explore</p></Link></div><hr/>
        <div class ="side-item"><Link to="/"><p>For Enterprise</p></Link></div><hr/>
        <div class ="side-item"> <Link to="/login"><p>Log in</p></Link></div><hr/>
        <div class ="side-item"><Link to="/signup"><p>Signup</p></Link></div><hr/>
        <div class ="side-item"><Link to="/"><button id="joinbtn" style ={{width:"200px"}}>Join for Free</button></Link></div>
          </div>
      </div> */}
    </div>
    )
}

export default NewNav
