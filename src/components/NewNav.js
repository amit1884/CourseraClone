import React, { Component } from 'react'
import '../css/style.css';
import TopNavPc from './TopNavPc';
import Sidebar from './Sidebar';
export class NewNav extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       active:false
    }
    this.handleClick=this.handleClick.bind(this);
  }
   handleClick=()=>{
    this.setState({
      active:!this.state.active
    })
  }
  render() {
    return (
      <div>
        <TopNavPc/>
        {!this.state.active&&
         <div class ="hamburger" >
         <i class ="fa fa-bars animated bounceIn" id="ham" onClick={this.handleClick}></i>
       </div>
        }
        {this.state.active&&
         <div class ="cross">
         <i class ="fa fa-close animated bounceIn" id="close" onClick={this.handleClick}></i>
         </div>
        }
        {this.state.active&&<Sidebar/>}
      </div>
    )
  }
}

export default NewNav
