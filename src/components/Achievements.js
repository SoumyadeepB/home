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
      <Carousel style={{ marginTop: "-120px", height: "75vh", width: "50vw" }}>
        <Carousel.Item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  1
                </Avatar>
              }
              title="IBM Master the Mainframe 2018"
              titleTypographyProps={{variant:'h6' }}
              subheader={
                <a href="https://techchannel.com/Enterprise/05/2019/2018-master-the-mainframe-winners">
                    [Winner listings]
                  </a>
              }
            />
            <CardMedia
              className={classes.media}
              image="MTM.png"
              title="IBM Master the Mainframe 2018"
              style={{
                margin: "0 auto",
                height: "22em",
                width: "98%",
              }}
            />

            <CardActions disableSpacing>
              <IconButton
                style={{ marginRight: "96px", marginBottom: "1px" }}
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
                IBM Master the Mainframe contest is a mainframe programming challenge, in which I was the regional winner from Europe in 2018, out of 18,000 students registered from over 120 countries.
                  
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
                  2
                </Avatar>
              }
              title="Intel® Edge AI Scholarship Program"
              titleTypographyProps={{variant:'h6' }}
              subheader={"June, 2019"}
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
                style={{ marginRight: "96px", marginBottom: "1px" }}
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
                  Recipient of Intel Edge AI Scholarship 2019, receiving full access to the Intel® Edge AI Course. 
                  
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Carousel.Item>
        
      </Carousel>
    </Container>
  );
}
