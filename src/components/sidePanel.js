import {
  AppBar,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  Fab
} from "@material-ui/core";
import BuildIcon from '@material-ui/icons/Build';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentIcon from "@material-ui/icons/Assignment";
import LocalLibraryRoundedIcon from "@material-ui/icons/LocalLibraryRounded";
import StarsIcon from "@material-ui/icons/Stars";
import WorkRoundedIcon from "@material-ui/icons/WorkRounded";
import React from "react";
import "./sidePanel.css";
import { Row, Col, Container } from "react-bootstrap";

export default class SidePanel extends React.Component {
  constructor(props) {
    super(props);
    //this.handleClick = this.handleClick.bind(this);
  }

  handleClick = id => {
    console.log("Clicked!", id);
  };
  render() {
    return (
      <React.Fragment>
        <AppBar
          position="static"
          style={{
            background: "linear-gradient(-90deg, #242424 10%, #000000 90%)",
            height: "100vh"
          }}
          xs={12}
        >
          <Toolbar
            style={{
              marginTop: "15vh",
              marginLeft: "-1vw"
            }}
            xs={9}
          >
            <Grid
              container
              direction="column"
              justifyItems="center"
              alignItems="center"
              display="flex"
            >
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  className="sections"
                  value={1}
                >
                  <AccountCircleIcon style={{ marginRight: "10px", fontSize:"18px" }} />
                  <Typography variant="subtitle1" className="subtitle1">Portfolio</Typography>
                </IconButton>
              </Grid>
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home/#/education";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  value={2}
                  className="sections"
                >
                  <LocalLibraryRoundedIcon style={{ marginRight: "10px", fontSize:"15px" }} />
                  <Typography variant="subtitle1" className="subtitle1">Education</Typography>
                </IconButton>
              </Grid>
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home/#/experience";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  value={3}
                  className="sections"
                >
                  <WorkRoundedIcon style={{ marginRight: "10px", fontSize:"15px" }} />
                  <Typography variant="subtitle1" className="subtitle1">Experience</Typography>
                </IconButton>
              </Grid>
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home/#/publications";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  value={4}
                  className="sections"
                >
                  <AssignmentIcon style={{ marginRight: "10px", fontSize:"15px" }} />
                  <Typography variant="subtitle1" className="subtitle1">Publications</Typography>
                </IconButton>
              </Grid>
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home/#/Projects";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  value={4}
                  className="sections"
                >
                  <BuildIcon style={{ marginRight: "10px", fontSize:"15px" }} />
                  <Typography variant="subtitle1" className="subtitle1">  Projects  </Typography>
                </IconButton>
              </Grid>
              
              <Grid
                item
                xs={11} lg={12}
                className="item"
                style={{ marginBottom: "20px" }}
                onClick={() => {
                  window.location = "/home/#/achievements";
                }}
              >
                <IconButton
                  edge="start"
                  color="inherit"
                  value={5}
                  className="sections"
                >
                  <StarsIcon style={{ marginRight: "10px", fontSize:"15px" }} />{" "}
                  <Typography variant="subtitle1" className="subtitle1">Achievements</Typography>
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
          <Row style={{position: 'absolute', left:"1em",bottom: '1em',justifyContent: 'left', textAlign: 'left' }}>
          <Col xs={3}>
            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fsoumyadeepb.github.io%2Fhome%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=Page+Visits&edge_flat=false"/>
          </Col>          
          </Row>
        </AppBar>
 
      </React.Fragment>

    );
  }
}
