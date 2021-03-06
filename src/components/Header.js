import React from 'react'
import '../css/style.css';
function Header() {
    return (
        <div class ="container-fluid header-banner" style={{overflowX:"hidden"}}>
            {/* <div class ="overlay"></div> */}
            <div class ="row">
                <div class ="col-md-12 col-sm-12">
                    <div class ="header-text-content">
                        <div class ="row">
                            <div class ="col-md-7 col-sm-12">
                            <div data-aos="zoom-in"><h1 id="amithead">Your Course To Success</h1></div>
                            <p id="amitp">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
                            <button id ="amitbtn">Join for Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Header
