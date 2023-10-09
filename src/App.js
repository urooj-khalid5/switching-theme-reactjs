import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "./App.css"
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
  Card, // Import Card component from reactstrap
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faPalette, faSpinner } from '@fortawesome/free-solid-svg-icons';

function Example(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [ThemeDark, SetThemeDark] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);
  const togglethem = () => {
    SetThemeDark(!ThemeDark);
  }
  const bgcolor = ThemeDark ? 'lightblue' : '';
  const cardcolor = ThemeDark ? 'black' : '';
  const textColor = ThemeDark ? 'white' : '';
  return (
    <div className="half-background" style={{ background: bgcolor }}>
      <Nav>
        <NavItem>
          <NavLink href="#" className='material '>
            Material Kit React
          </NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className='Components '>
            Components
          </DropdownToggle>
        </Dropdown>
        <NavItem>
          <NavLink href="#" className='Upgrading'>
            Upgrade To Pro
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" className='Downloading'>
            Download
          </NavLink>
        </NavItem>

      </Nav>
      <div className="img">
        <img
          src="https://i.pinimg.com/550x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg"
          alt="Circle"
          className="my-img"
        />

        { }
        <div><Button onClick={togglethem} className='switch-button'>Switch Theme!</Button></div>
        <Card style={{ width: '90rem', height: '470px', backgroundColor: cardcolor }} className='cards'>

          <CardBody className='card-body' style={{ backgroundColor: cardcolor, color: textColor }} >
            <CardTitle tag="h5" className='title'>Urooj Khalid</CardTitle>
            <CardSubtitle className="subtitle" tag="h6" >I am a Front End Developer</CardSubtitle>
            <div className="icons">
              <a href="https://www.facebook.com" target='_blank' className='icons'>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com" target='_blank' className='icons'>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.twitter.com" target='_blank' className='icons'>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
            <div className='description'>
              <p> <b> A front-end developer specializes in creating the user interface of websites and web applications. They possess strong skills in HTML, CSS, and JavaScript to design and implement visually appealing and responsive user interfaces. Front-end developers also work with various frameworks and libraries, ensuring seamless user experiences and compatibility across different devices and browsers. Additionally, they collaborate with designers and back-end developers to bring web projects to life.</b></p>
            </div>
            <div className="icon">
              <div className='social-ic one'>
                <FontAwesomeIcon icon={faSpinner} size="2x" /> <p className='term1 '>Studio</p></div>

              <div className=' social-ic two'>
                <FontAwesomeIcon icon={faPalette} size="2x" />  <p className='term2'>Work</p></div>

              <div className='social-ic three'>
                <FontAwesomeIcon icon={faHeart} size="2x" /> <p className='term3'>Favourite</p></div>

            </div>
          </CardBody>
        </Card>
      </div>

    </div>
  );
}
export default Example;