import React, { Component } from "react";
import "./index.css";
import Details from "./components/Details";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
  }
  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          details: data.results
        });
      })
      .catch((e) => console.log(e));
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Details details={this.state.details} />
      </div>
    );
  }
}


