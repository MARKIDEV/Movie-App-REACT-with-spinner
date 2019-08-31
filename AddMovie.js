import React, { Component } from "react";
import Loader from "./Loader.js";
export default class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: "",
      rating: "",
      description: "",
      poster: "",
      release: ""
    };
  }

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };
  wait = async (milliseconds = 100) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };
  componentDidMount() {
    this.wait(100);
  }

  handelChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    if (this.state.loading) return <Loader />;
    return (
      <div className="form">
        <input
          className="input"
          placeholder="movie title"
          name="title"
          value={this.state.title}
          onChange={this.handelChange}
        />
        <input
          className="input"
          placeholder="movie rating"
          name="rating"
          value={this.state.rating}
          onChange={this.handelChange}
        />
        <input
          className="input"
          placeholder="movie description"
          name="description"
          value={this.state.description}
          onChange={this.handelChange}
        />
        <input
          className="input"
          placeholder="movie poster"
          name="poster"
          value={this.state.poster}
          onChange={this.handelChange}
        />
        <input
          className="input"
          placeholder="movie release"
          name="release"
          value={this.state.release}
          onChange={this.handelChange}
        />
        <button
          className="btn-submit"
          type="submit"
          onClick={() => {
            this.props.AjouterFilm({
              title: this.state.title,
              rating: this.state.rating,
              description: this.state.description,
              poster: this.state.poster,
              release: this.state.release
            });
            this.setState({
              title: "",
              rating: "",
              description: "",
              poster: "",
              release: ""
            });
          }}
        >
          Add new movie
        </button>
      </div>
    );
  }
}
