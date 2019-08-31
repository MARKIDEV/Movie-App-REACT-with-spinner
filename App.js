import React, { Component } from "react";
import Container from "./Container.js";
import Loader from "./Loader.js";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(2000);
  }
  render() {
    if (this.state.loading) return <Loader />;

    return (
      <div>
        <Container />
      </div>
    );
  }
}
