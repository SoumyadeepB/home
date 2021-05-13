import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Container, Avatar, Typography } from "@material-ui/core";
import { Row, Col } from 'react-bootstrap';
import avatar from "../static/profile_pic.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import TechTools from './scroll_menu.js';
import "./main.css";

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ textAlign: "center", marginTop: "-80px" }}>
        <Avatar
          alt="Geek"
          src={avatar}
          style={{
            width: "150px",
            height: "150px",
            margin: "auto",
            boxShadow: "0 0 0 3px #fff, 0 0 0 2px #000"
          }}
        />
        <Typography variant="h4" style={{ textAlign: "center", marginTop: "1em", fontFamily:"Noto Sans SC" }}>Soumyadeep Bhattacharjee</Typography>
        <Typography variant="h6" style={{ textAlign: "center", marginTop: "1em", fontFamily:"Noto Sans SC" }}>
          M.Sc Computer Science (Autonomous Systems), Universität Stuttgart
          
          </Typography>

          <br/><br/>

        <ReactTypingEffect
          style={{ fontFamily: "Stardos Stencil", fontSize: "40px" }}
          className="typingeffect"
          text={["< programmer />", "< learner />", "< thinker />"]}
          speed={200}
          eraseDelay={100}
        />
        
        <Row>
          <Col xs={12}>
        <h5 style={{ textAlign: "center", marginTop: "1em", fontFamily:"Noto Sans SC" }}>
          Tech and Tools Used: <br></br> 
          </h5>        
          </Col>          
          </Row>
        <Row style={{ textAlign: "center"}}>
        <Col md={{ span: 6, offset: 3 }} >
          <TechTools/>
        </Col>
        </Row>
        <br></br><br></br><br></br>
        <Row style={{ textAlign: "center", position: "static", bottom:"0px", marginBottom:"-100px"}}>
        <Col md={{ span: 4, offset: 4 }} >
        <a href="https://www.linkedin.com/in/soumyadeepb/"style={{ color: "inherit",margin:"25px" }}><LinkedInIcon style={{ fontSize: "48px" }}  className="socials" /></a>
        <a href="https://github.com/SoumyadeepB"style={{ color: "inherit",margin:"25px" }}><GitHubIcon style={{ fontSize: "48px" }}  className="socials" /></a>
        <a href="mailto:soumyadeep.bh1994@gmail.com"style={{ color: "inherit",margin:"25px" }}><ContactMailIcon style={{ fontSize: "48px" }}  className="socials" /></a>
        </Col>         
        </Row>
      </Container>
    );
  }
}
