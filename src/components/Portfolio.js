import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Container, Avatar, Typography } from "@material-ui/core";
import { Row, Col } from 'react-bootstrap';
import avatar from "../static/GitHub.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import ContactMailIcon from '@material-ui/icons/ContactMail';

export default class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={{ textAlign: "center", marginTop: "auto" }}>
        <Avatar
          alt="Geek"
          src={avatar}
          style={{
            width: "240px",
            height: "240px",
            margin: "auto",
            border: "2px solid black"
          }}
        />
        <Typography variant="h3" style={{ textAlign: "center", marginTop: "1em" }}>Soumyadeep Bhattacharjee</Typography>



        <ReactTypingEffect
          style={{ fontFamily: "Calibri", fontSize: "40px" }}
          className="typingeffect"
          text={["<Programmer/>", "<Learner/>", "<Thinker/>"]}
          speed={80}
          eraseDelay={200}
        />
        <Row style={{ textAlign: "center", marginTop: "20vh" }}>
          <Col xs="3"></Col>
          <Col xs="2"><a href="https://www.linkedin.com/in/soumyadeepb/" style={{ color: "inherit" }}><LinkedInIcon style={{ fontSize: "4.8em" }} /></a></Col>
          <Col xs="2"><a href="https://github.com/SoumyadeepB" style={{ color: "inherit" }}><GitHubIcon style={{ fontSize: "4.8em" }} /></a></Col>
          <Col xs="2"><a href="mailto:soumyadeep.bh1994@gmail.com" style={{ color: "inherit" }}><ContactMailIcon style={{ fontSize: "4.8em" }} /></a></Col>
          <Col xs="3"></Col>
        </Row>

      </Container>
    );
  }
}
