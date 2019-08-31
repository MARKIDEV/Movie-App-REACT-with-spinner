import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <input
          style={{ textAlign: "center", width: "700px", color: "blue" }}
          placeholder="what movie you are searching for ?"
          type="text"
          list="movie-list"
          onChange={e => this.props.UpdateSearch(e.target.value)}
        />
        <datalist id="movie-list">
          {this.props.movie.map(el => (
            <option value={el.title}></option>
          ))}
        </datalist>
      </div>
    );
  }
}
