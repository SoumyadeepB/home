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
    background: "linear-gradient(90deg, #2af598 0%, #009efd 100%, #2af598 0%)",
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

export default function Project() {
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
      <Carousel style={{ position: "fixed", top: "6vh", height: "75vh", width: "50vw" }}>
      <Carousel.Item>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  1
                </Avatar>
              }
              title="Deep Learning for Voice Cloning"
              subheader={<div><p>Master Thesis <br/> Sony R&D Center Europe <br/>
              <a href="https://soumyadeepb.github.io/mos-test/">
                    [Voice Samples]
                </a>
                  </p></div>}
            />
            <CardMedia
              className={classes.media}
              image="VoiceCloning.png"
              title="VoiceCloning"
              style={{
                margin: "0 auto",
                width: "80%",
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
                <Typography paragraph style={{ textAlign: "center", marginTop:"-15px" }}>
                Artificial simulation of the voice of a Speaker using few seconds of reference speech.<br/>
               
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
              title="Image Classification in the Browser"
              subheader={<a href="https://soumyadeepb.github.io/image-classifier/">
              [Application URL]
            </a>}
            />
            <CardMedia
              className={classes.media}
              image="img_classifier.png"
              title="Image Classifier"
              style={{
                margin: "0 auto",
                width: "80%",
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
                <Typography paragraph style={{ textAlign: "center", marginTop:"-15px" }}>
                Image Classification on the browser using the pretrained MobileNet model.
               
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
                  3
                </Avatar>
              }
              title="DC-GAN"
              subheader={<a href="https://github.com/SoumyadeepB/DeepLearning/blob/master/DC_GAN/DC_GAN_Exercise.ipynb">
              [Repository]
            </a>}
            />
            <CardMedia
              className={classes.media}
              image="dcgan.gif"
              title="Deep Convolutional-GAN"
              style={{
                margin: "0 auto",
                height: "78%",
                width: "48%",
              }}
            />

            <CardActions disableSpacing>
              <IconButton
                style={{ marginRight: "98px", marginBottom: "6px" }}
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
                <Typography paragraph style={{ textAlign: "center", marginTop:"-15px" }}>
                A miniature Deep Convolutional Generative Adversarial Network (DC-GAN) framework for the generation of MNIST digits.
                
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
                  4
                </Avatar>
              }
              title="Anomaly Detection of Stock Prices"
              subheader={<a href="https://github.com/SoumyadeepB/Machine-Learning/tree/master/AnomalyDetector">
              [Project URL]
            </a>}
            />
            <CardMedia
              className={classes.media}
              image="AnomalyDetector.png"
              title="Anomaly Detection"
              style={{
                margin: "0 auto",
                height: "40vh",
                width: "40vw",
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
                <Typography paragraph style={{ textAlign: "center", marginTop:"-15px" }}>
                Detect anomalies in Ford’s historical stock price time series data with an LSTM autoencoder.                  
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
                  5
                </Avatar>
              }
              title="Battle of Neighborhoods"
              subheader={<a href="https://github.com/SoumyadeepB/Coursera_Capstone/blob/master/Capstone_Project_Report.pdf">
              [Project URL]
            </a>}
            />
            <CardMedia
              className={classes.media}
              image="battleOfNeighborhoods.png"
              title="Battle of Neighborhoods"
              style={{
                margin: "0 auto",
                height: "40vh",
                width: "40vw",
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
                <Typography paragraph style={{ textAlign: "center", marginTop:"-15px" }}>
                Segmenting Neighborhoods based on popularity/location using ML and the FourSquare API.                  
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
