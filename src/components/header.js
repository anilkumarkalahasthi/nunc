import { Link } from "gatsby"
import PropTypes from "prop-types"
import React,{Component} from "react"
import logos from "./img/nunc_sys_logo.svg";
import containerStyles from "./css/container.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Router } from "@reach/router"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  NavDropdown,
  DropdownItem
} from 'reactstrap';
//import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Header extends React.Component{
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.state = {
      isOpen:false,
      dropdownOpen: false,
      dropdownOpens:false
    };
  }
  handleOpen = () => {
    this.setState({ isOpen: true })
  }
   
  handleOpens = () => {
    this.setState({ dropdownOpens: true })
  }

  handleCloses = () => {
     this.setState({ dropdownOpens: false })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }
  render(){
    return(
  <header className={containerStyles.container}   
  >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={logos} alt="Logo" className={containerStyles.logo} />
        </Link>
     <div className={containerStyles.menudiv}>
     <Navbar light expand="md">
     <Link to="/" style={{
                textDecoration:`none`
              }}>Home</Link>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <UncontrolledDropdown nav inNavbar className="d-inline-block"
          onMouseEnter = { this.handleOpen }
          onMouseLeave = { this.handleClose }
          isOpen={ this.state.isOpen }
         
        >
                <DropdownToggle nav caret>
                Insights
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                <Link to="BigDataAnalytics" style={{
                textDecoration:`none`
              }}>Big Data Analytics</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="BlockChain" style={{
                textDecoration:`none`
              }}>Block Chain</Link>
                  </DropdownItem>                
                  <DropdownItem>
                  <Link to="DataScience" style={{
                textDecoration:`none`
              }}>Data Science</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="ChatBots" style={{
                textDecoration:`none`
              }}>Chat Bots</Link>
                  </DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
              </NavItem>
              <NavItem>
              <UncontrolledDropdown nav inNavbar className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav caret>
                Expertise
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <UncontrolledDropdown  nav inNavbar className="d-inline-block"
          onMouseEnter = { this.handleOpens }
          onMouseLeave = { this.handleCloses }
          isOpen={ this.state.dropdownOpens }
          >
                <DropdownToggle nav caret>
                <Link to="Mobility" style={{
                textDecoration:`none`
              }}>Mobility</Link>
                </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem>
                <Link to="AndroidNative" style={{
                textDecoration:`none`
              }}>Android Native</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="IosNative" style={{
                textDecoration:`none`
              }}>Ios Native</Link>
                  </DropdownItem>                
                  <DropdownItem>
                  <Link to="CrossPlatform" style={{
                textDecoration:`none`
              }}>Cross Platform</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="Pwa" style={{
                textDecoration:`none`
              }}>PWA</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="WebDevelopment" style={{
                textDecoration:`none`
              }}> Web Development</Link>
                  </DropdownItem>                
                  <DropdownItem>
                  <Link to="Bigdata" style={{
                textDecoration:`none`
              }}> Big Data</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="Iot" style={{
                textDecoration:`none`
              }}> Iot</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="Salesforce" style={{
                textDecoration:`none`
              }}> Salesforce</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="SoftwareTesting" style={{
                textDecoration:`none`
              }}>Software Testing</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="StaffAugmentation" style={{
                textDecoration:`none`
              }}> Staff Agumentation</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="AgricultureTechnology" style={{
                textDecoration:`none`
              }}> Agriculture Technology</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="AutoMotive" style={{
                textDecoration:`none`
              }}> Auto Motive</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="Ecommerce" style={{
                textDecoration:`none`
              }}>Ecommerce</Link>
                  </DropdownItem>
                  <DropdownItem>
                  <Link to="DigitalMarketing" style={{
                textDecoration:`none`
              }}> DigitalMarketing</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>
              <NavItem>
              <Link to="About" style={{
                textDecoration:`none`
              }} className="mr-2">About Us</Link>
              </NavItem>
              <NavItem>
              <Link to="Contact" style={{
                textDecoration:`none`
              }} >Contact Us</Link>
              </NavItem>              
            </Nav>
          </Collapse>
        </Navbar>
     </div>
   
  </header>
    );
  }
            }

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
