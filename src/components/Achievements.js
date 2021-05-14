import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import clsx from "clsx";
import Carousel from "react-bootstrap/Carousel";
import {
  Card,
  Container,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    background: "linear-gradient(90deg, #2AF5B8 10%, #009efd 100%)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Achievements() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Carousel style={{ marginTop: "-80px", height: "75vh", width: "50vw" }}>
        <Carousel.Item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  A
                </Avatar>
              }
              title="Certficate 1"
              subheader={Date().slice(0, 15)}
            />
            <CardMedia
              className={classes.media}
              image="MTM.png"
              title="Master the Mainframe 2018"
              style={{
                margin: "0 auto",
                height: "22em",
                width: "98%",
              }}
            />

            <CardActions disableSpacing>
              <IconButton
                style={{ marginRight: "96px", marginBottom: "6px" }}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph style={{ textAlign: "center" }}>
                  Description:
                  <a href="https://masterthemainframe.com/master-mainframe-2018-winners/">
                    URL
                  </a>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  B
                </Avatar>
              }
              title="Certficate 2"
              subheader={Date().slice(0, 15)}
            />
            <CardMedia
              className={classes.media}
              image="IntelScholarship.jpg"
              title="Intel Edge AI Scholarship 2019"
              style={{
                margin: "0 auto",
                height: "22em",
                width: "24em",
              }}
            />

            <CardActions disableSpacing>
              <IconButton
                style={{ marginRight: "96px", marginBottom: "6px" }}
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph style={{ textAlign: "center" }}>
                  Intel Edge AI Scholarship 2019 :
                  <a href="https://masterthemainframe.com/master-mainframe-2018-winners/">
                    URL
                  </a>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
}
