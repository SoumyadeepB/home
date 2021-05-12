import { CssBaseline, Grid } from "@material-ui/core";
import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import SidePanel from "./components/sidePanel";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Publications from "./components/Publications";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: 1
    };
    this.onItemChange = this.onItemChange.bind(this);
  }

  onItemChange = value => {
    console.log("Value from child", value);
    this.state.menu = value;
  };
  render() {
    return (
      <div className="App full-width">
        <CssBaseline />
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={3} md={4} lg={2}>
            <SidePanel
              menu={this.state.menu}
              onItemChange={this.onItemChange}
            />
          </Grid>
          <Grid item xs={9} md={8} lg={10}>
            <HashRouter>
              <Switch>
                <Route exact path="/" component={Portfolio} />
                <Route exact path="/education" component={Education} />
                <Route exact path="/experience" component={Experience} />
                <Route exact path="/publications" component={Publications} />
                <Route exact path="/projects" component={Project} />
                <Route exact path="/achievements" component={Achievements} />
              </Switch>
            </HashRouter>
          </Grid>
        </Grid>
      </div>
    );
  }
}
