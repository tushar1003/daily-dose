import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  apiKey=process.env.REACT_APP_NEWS_API
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <News key="general" country="in" apiKey={this.apiKey} category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" country="in" apiKey={this.apiKey} category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" country="in" apiKey={this.apiKey} category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" country="in" apiKey={this.apiKey} category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" country="in" apiKey={this.apiKey} category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" country="in" apiKey={this.apiKey} category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" country="in" apiKey={this.apiKey} category="technology" />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
  }
}
