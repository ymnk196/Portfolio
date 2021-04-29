import React, { Component } from 'react';
import image2 from '../../Components/portfolio/profile.jpg';
import Modal from 'react-bootstrap/Modal';
import  '../../Components/portfolio/Portfolio.css';
class Header extends Component {
     constructor(props) {
       super(props);
       this.state = {
          openPopUp : false
       } 
    }
    componentDidMount() {
        document.querySelector(".background1").style.border = '2px solid whitesmoke';
    }
    handleProfilePic = () => {
       this.setState({
            openPopUp : true
       },console.log(this.state.openPopUp));
    }
    handleProfilePicClose = () => {
       this.setState({
            openPopUp : false
       },console.log(this.state.openPopUp));
    }
    changeBackgroundToBlack = () => {
       document.querySelector(".container").style.backgroundColor = 'black'; 
       document.querySelector(".removeShadow").style.borderBottom = '11px solid black'; 
       document.getElementById("container").style.background = 'black'; 
       document.querySelector(".background1").style.border = '2px solid whitesmoke';
       document.querySelector(".background2").style.border = 'none';
       document.querySelector(".background3").style.border = 'none';
    }
    changeBackgroundToLightPurple = () => {
        document.querySelector(".container").style.backgroundColor  = 'rgb(10, 13, 51)'; 
        document.querySelector(".removeShadow").style.borderBottom = '11px solid rgb(10, 13, 51)'; 
        document.getElementById("container").style.background = 'rgb(10, 13, 51)';
        document.querySelector(".background2").style.border = '2px solid whitesmoke'; 
        document.querySelector(".background3").style.border = 'none';
        document.querySelector(".background1").style.border = 'none';
    }
    changeBackgroundToLightBlue = () => {
        document.querySelector(".container").style.backgroundColor  = '#68a4a4'; 
        document.querySelector(".removeShadow").style.borderBottom = '11px solid #68a4a4'; 
        document.getElementById("container").style.background = '#68a4a4';
        document.querySelector(".background3").style.border = '2px solid whitesmoke'; 
        document.querySelector(".background2").style.border = 'none';
        document.querySelector(".background1").style.border = 'none';
    }

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col">
                        <div className="backgroundChange">
                            <button className="background1" onClick={this.changeBackgroundToBlack} title="change background to black"></button>
                            <button className="background2" onClick={this.changeBackgroundToLightPurple} title="change background to light purple"></button>
                            <button className="background3" onClick={this.changeBackgroundToLightBlue} title="change background to light blue"></button>
                        </div>
                    </div>
                    <div class="col">
                        <center><h2 className="textColor headerAdjustment">Portfolio</h2></center>
                    </div>
                    <div class="col">
                        <div className="profileView">
                            <img className="headerProfileimageStyle" src={image2} onClick={this.handleProfilePic} alt="profilePic"/>
                        </div>
                            <center>
                        <div>
                            
                            <Modal
                            size="lg" 
                            show={this.state.openPopUp} 
                            onHide={this.handleProfilePicClose}
                            className="headerPopup"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Details</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div className="centerAdjustment">
                                            <img className="headerImageStylingForProfileExpanding" title="details" src={image2} alt="profilePic" />
                                    </div>
                                    <div className="centerAdjustment">
                                        <h5>Kiran y</h5>
                                        <h5>ymnk196@gmail.com</h5>
                                        <h5>+918892646353</h5>
                                    </div>
                                </Modal.Body>
                            </Modal> 
                                    
                        </div>
                        </center>
                        </div>
                </div>
            </div>  
        );
    }
}

export default Header;