import React, { Component } from 'react';
import './Portfolio.css';
import image1 from './walpaper.png';
import image2 from './profile.jpg';
import resume from './resume.pdf';
import Modal from 'react-bootstrap/Modal';
import Header from '../../Components/header/Header';
import Footer from '../../Components/footer/Footer';
class Portofolio extends Component {
    constructor(props) {
       super(props);
       this.state = {
          openPopUp : false,
          warning : false,
          danger : false,
          white : false,
          success : false,
          success1 :false,
          info :false
       } 
    }
    handleProfilePic = () => {
       this.setState({
            openPopUp : true
       });
    }
    handleProfilePicClose = () => {
       this.setState({
            openPopUp : false
       });
    }
    infoDiv = () => {
        if(this.state.info){
            this.setState({
                info : false
             });
        }else{
             this.setState({
                info : true
             });
        }
    }
    infoWarning = () => {
         if(this.state.warning){
            this.setState({
                warning : false
             });
        }else{
             this.setState({
                warning : true
             });
        }
    }
    infoWhite = () => {
         if(this.state.white){
            this.setState({
                white : false
             });
        }else{
             this.setState({
                white : true
             });
        }
    }
    infoSuccess = () => {
         if(this.state.success){
            this.setState({
                success : false
             });
        }else{
             this.setState({
                success : true
             });
        }
    }
    infoSuccess1 = () => {
         if(this.state.success1){
            this.setState({
                success1 : false
             });
        }else{
             this.setState({
                success1 : true
             });
        }
    }
    infoDanger = () => {
         if(this.state.danger){
            this.setState({
                danger : false
             });
        }else{
             this.setState({
                danger : true
             });
        }
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Header />
                    <div className="row walpaper">
                        <div className="col">
                            <img className="imageStylingForWalpaper" title="wallpaper" src={image1}  alt="walpaper"/>
                            <div>
                                <img className="imageStylingForProfile" title="profilepic" src={image2} onClick={this.handleProfilePic} alt="profilePic"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Modal
                         size="lg" 
                         show={this.state.openPopUp} 
                         onHide={this.handleProfilePicClose}
                         backdrop="static"
                         keyboard={false}
                         className="PortfolioPopup"
                         >
                            <Modal.Header closeButton>
                                <Modal.Title className="headerStyling">Profile Picture</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <img className="imageStylingForProfileExpanding" src={image2} alt="profilePic"/>
                            </Modal.Body>
                        </Modal>          
                    </div>
                    <br /> <br /> <br />
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8 aboutColor">
                            <h2><u>About Me</u></h2> 
                            <br />
                            <p>Hello myself KIRAN Y  , I am a passionate and hard working full stack developer with the expierance of '1 year 4 months' in the company 'Infanion software solution private limited'.</p>
                            <p>My native is 'Davangere(karnataka)' and graduated from 'Dayananda Sagar college of Engineering(Banglore)(karnataka)' in Electronics and communication.</p>
                            <p>
                                <h5><u>Languages known</u></h5>
                                <ul>
                                    <li>English</li>
                                    <li>Kannada</li>
                                    <li>Tamil</li>
                                </ul>
                            </p>
                        </div>
                        <div className="col"></div>
                    </div>
                    <br /> <br /> <br />
                     <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8 .col-sm-6 .col-md-8">
                                 <div className="card text-white bg-danger mb-3" onClick={this.infoWarning}>
                                <div className="card-header"><h3>Projects</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click here to know the projects.</p>
                                </div>
                            </div>
                             {this.state.warning && <div className="textColor">
                                 <ul>
                                    <li>https:/kiranportofolio.com</li>
                                    <li>https:/kiranportofolio.com</li>
                                    <li>https:/kiranportofolio.com</li>
                                    <li>https:/kiranportofolio.com</li>
                                </ul>
                            </div>}
                            <br /> <br />
                            <div className="card text-white bg-success mb-3" onClick={this.infoSuccess1}>
                                <div className="card-header"><h3>Roles and responsibilities</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click here to know the roles and responsibilities</p>
                                </div>
                            </div>
                            {this.state.success1 && <div className="textColor">
                                <ul>
                                    <li>Worked in 'Agile' environment for developing, designing, unit testing.</li>
                                    <li>Debugging and fixing bugs.</li>
                                    <li>Committing code changes into repository by using version control tool(GIT)</li>
                                    <li>Familiar in developing a responsive website.</li>
                                    <li>Maintaining coding standards</li>
                                </ul>                               
                            </div>}
                            <br /> <br />
                            <div className="card text-white bg-warning mb-3" onClick={this.infoWhite}>
                                <div className="card-header"><h3>Expierance details</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click here to know the expierance detail.</p>
                                </div>
                            </div>
                             {this.state.white && <div className="textColor">
                                <p>
                                    I had expierance of 'one year four months' as a full stack developer role in the company 'Infanion  software solution private limited'.
                                    I have worked on two projects related to ecommerce and construction.
                                    Languages used are react.js, vue.js, HTML, css, bootstrap, react bootstrap for frontend and laravel ,php ,craft cms for backend.
                                </p>
                            </div>}
                            <br /><br />
                            <div className="card text-white bg-info mb-3" onClick={this.infoDiv}>
                                <div className="card-header"><h3>Programming languages</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click here to know the languages ,which i knew.</p>
                                </div>
                            </div>
                            {this.state.info && <div className="textColor">
                                <h5><u>Frontend Languages</u></h5>
                                <ul>
                                    <li>React.JS</li>
                                    <li>Vue.JS</li>
                                    <li>Javascript</li>
                                    <li>HTML5</li>
                                    <li>CSS3</li>
                                    <li>React bootstrap</li>
                                </ul>
                                 <h5><u>Backend Languages</u></h5>
                                 <ul>
                                    <li>Php</li>
                                    <li>Laravel</li>
                                    <li>Core java</li>
                                    <li>Craft cms</li>
                                </ul>
                                <h5><u>Tools</u></h5>
                                <ul>
                                    <li>Atom</li>
                                    <li>Visual studio</li>
                                    <li>php storm</li>
                                </ul>
                                <h5><u>Version Control</u></h5>
                                <ul>
                                    <li>GIT</li>
                                </ul>
                                 <h5><u>Database</u></h5>
                                <ul>
                                    <li>Postgresql</li>
                                    <li>Mysql</li>
                                </ul>
                                 <h5><u>Operating system</u></h5>
                                <ul>
                                    <li>Windows</li>
                                    <li>Linux</li>
                                </ul>
                            </div>}
                            <br /> <br />
                            <div className="card text-white bg-dark mb-3" onClick={this.infoSuccess}>
                                <div className="card-header"><h3>Education details</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click  here to know the  educational details.</p>
                                </div>
                            </div>
                            {this.state.success && <div className="textColor">
                                <h5><u>Graduation</u></h5>
                                <ul>
                                    <li>Electronics and communication Engineering Completed in 2018 from 'Dayananda sagar college of Engineering', Which is located in Banglore'.</li>
                                </ul>
                                <h5><u>Diploma</u></h5>
                                <ul>
                                    <li>Completed diploma education in the branch 'Electronics and comunication' in the year '2015' from  'Bapuji polytechnic shabanur', which is located in Davangere</li>
                                </ul>
                                <h5><u>School</u></h5>
                                <ul>
                                     <li>Completed sschool education comunication' in the year '2012' from  'National convent higher primary school', which is located in Davangere</li>
                                </ul>
                            </div>}
                            <br /> <br />
                            <div className="card text-white bg-danger mb-3" onClick={this.infoDanger}>
                                <div className="card-header"><h3>Hobbies</h3></div>
                                <div className="card-body">
                                    <p className="card-text">Please click here to know the hobbies.</p>
                                </div>
                            </div>
                             {this.state.danger && <div className="textColor">
                                 <ul>
                                    <li>Playing sports</li>
                                    <li>Social work activities</li>
                                    <li>Watching movies</li>
                                    <li>Listening songs</li>
                                </ul>
                            </div>}
                            <br /> <br />
                            <center><a class="btn buttonAdjustment" href={resume}>Download Resume</a></center>
                        </div>
                        <div className="col-2"></div>
                    </div>
                     <br /> <br />
                </div>
                 <div className="gap">
                </div>
                <div className="container" id="container">
                    <br />
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-8 aboutColor">
                            <center><h2><u>Contact details</u></h2></center>
                            <br />
                            <div className="mobileContactDetails">
                                <div>
                                    <center><h6 className="ContactDetailWidthAdjustment"><u>GITHUB</u></h6></center>
                                    <center><p className="ContactDetailWidthAdjustment">https://github.com/topics/portfolio-template</p></center>
                                </div>
                                <br />
                                 <div>
                                    <center><h6 className="ContactDetailWidthAdjustment"><u>GMAIL</u></h6></center>
                                    <center><p className="ContactDetailWidthAdjustment">ymnk196@gmail.com</p></center>
                                </div>
                                <br />
                                <div>
                                    <center><h6 className="ContactDetailWidthAdjustment"><u>LINKED IN</u></h6></center>
                                    <center><p className="ContactDetailWidthAdjustment">https://www.linkedin.com/in/kiran-y-aa90941bb</p></center>
                                </div>
                                 <br />
                                <div>
                                    <center><h6 className="ContactDetailWidthAdjustment"><u>PHONE NUMBER</u></h6></center>
                                    <center><p className="ContactDetailWidthAdjustment">+918892646353</p></center>
                                </div>
                            </div>
                            <br />
                            <div>
                            </div>
                            <br />
                        </div>
                        <div className="col"></div>
                    </div>
                    <div className="row">
                        <div className="col lapContactDetails textColor">
                            <div>
                                <center><h6 className="ContactDetailWidthAdjustment"><u>GITHUB</u></h6></center>
                                <center><p className="ContactDetailWidthAdjustment">https://github.com/ymnk196</p></center>
                            </div>
                            <br />
                                <div>
                                <center><h6 className="ContactDetailWidthAdjustment"><u>GMAIL</u></h6></center>
                                <center><p className="ContactDetailWidthAdjustment">ymnk196@gmail.com</p></center>
                            </div>
                        </div>
                        <div className="col lapContactDetails textColor">
                            <div>
                                <center><h6 className="ContactDetailWidthAdjustment"><u>LINKED IN</u></h6></center>
                                <center><p className="ContactDetailWidthAdjustment">https://www.linkedin.com/in/kiran-y-aa90941bb</p></center>
                            </div>
                            <br />
                            <div>
                                <center><h6 className="ContactDetailWidthAdjustment"><u>PHONE NUMBER</u></h6></center>
                                <center><p className="ContactDetailWidthAdjustment">+918892646353</p></center>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container removeShadow">
                    <Footer />
                </div>
                
            </div>
        );
    }
}


export default Portofolio;