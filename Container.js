import React, { Component } from "react";
import MovieCard from "./MovieCard.js";
import SearchBar from "./SearchBar.js";
import Rating from "./Rating.js";
import "./App.css";
import AddMovie from "./AddMovie";
import Loader from "./Loader.js";

export default class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      rate: 1,
      newrate: 0,
      movies: [
        {
          title: "The Lion King",
          description:
            "The last of Disney's 2019 remakes is The Lion King, directed by The Jungle Book's Jon Favreau. This one boasts a fantastic voice cast, which includes none other than Beyoncé Knowles as Nala. Donald Glover is Simba, and other performances are provided by James Earl Jones, Chiwetel Ejiofor, Alfre Woodard, Keegan-Michael Key, Seth Rogen, and John Oliver.",
          rating: 5,
          release: "Mai 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-lion-king-1543265720.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=980:*"
        },
        {
          title: "The Kid Who Would Be King",
          description:
            "Arthurian legend gets a PG twist in this movie about a 12-year-old who unknowingly pulls the famed sword from the stone, setting him on a path to fight the evil Morgana. The fantasy/adventure comes from British director Joe Cornish, who garnered praise for his (not-for-kids) sci-fi movie Attack the Block.",
          rating: 5,
          release: "Avril 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-the-kid-who-would-be-king-1543259868.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=980:*"
        },
        {
          title: "How To Train Your Dragon: The Hidden World",
          description:
            "It's been a long journey since young Hiccup met Toothless in How to Train Your Dragon. Now, Hiccup is chief and his village is under threat, leading him and Toothless to go off in search of a world that might only exist in Viking lore.",
          rating: 5,
          release: "Avril 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-how-to-train-your-dragon-1543261100.jpg?crop=1.00xw:0.949xh;0,0.0505xh&resize=980:*"
        },
        {
          title: "Wonder Park",
          description:
            "This movie follows an imaginative girl named June who spends all her time as a child dreaming up an elaborate amusement park. As an adult, June finds her park out in the real world, and realizes that she has to save it from evil forces. If your kids are as enchanted with the park as June is, they're in luck — Nickelodeon plans on running a TV series based on the movie.",
          rating: 4,
          release: "february 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-wonder-park-1543261414.jpg?crop=1xw:1xh;center,top&resize=980:*"
        },
        {
          title: "Dumbo",
          description:
            "Disney continues to remake its classic animated films with three live-action-and-CGI re-dos this year. The first was Dumbo, the heartstring-tugging tale of the flying elephant, which stars Colin Farrell as the circus' elephant caretaker. The movie is directed by Tim Burton.",
          rating: 2,
          release: "March 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-dumbo-1543261865.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=980:*"
        },
        {
          title: "DISNEY Disneynature Penguins",
          description:
            "Every year around Earth Day, Disney releases a documentary about one of the planet's most amazing creatures. This year, it's about adorable penguins, so alert all those March of the Penguins/Happy Feet fans out there! ",
          rating: 5,
          release: " January 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-penguins-1543262790.jpg?crop=0.9876543209876543xw:1xh;center,top&resize=980:*"
        },
        {
          title: "The Secret Life of Pets 2",
          description:
            "The sequel to The Secret Life of Pets delves deeper into what our kitties and pooches are doing while we're away. As with the first movie, this one is stacked with a voice cast of comedians, including newcomers Patton Oswalt (who's replacing Louis C.K.) and Tiffany Haddish.",
          rating: 5,
          release: "April 2019",
          poster:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2019-secret-life-of-pets-2-1543264919.jpg?crop=1xw:0.9474xh;center,top&resize=980:*"
        }
      ]
    };
  }
  UpdateSearch = search => {
    this.setState({
      search: search
    });
  };

  AjouterFilm = x => {
    this.setState({
      movies: this.state.movies.concat(x)
    });
  };
  ChangeRate = () => {
    this.setState({
      rate: this.state.newrate
    });
  };
  render() {
    return (
      <div>
        <header>
          <h1 className="title">25 Kids' Movies Coming out in 2019 </h1>
          <div className="rating">
            <h2>Movies Rating </h2>
            <Rating rate={this.state.rate} onChange={this.ChangeRate} />
          </div>

          <AddMovie AjouterFilm={this.AjouterFilm} />
        </header>

        <SearchBar movie={this.state.movies} UpdateSearch={this.UpdateSearch} />

        <MovieCard
          card={this.state.movies.filter(
            el =>
              el.title.includes(this.state.search) &&
              el.rating > this.state.rate
          )}
        />
      </div>
    );
  }
}
