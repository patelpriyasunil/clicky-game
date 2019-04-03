//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import pooh from "./pooh.json";
import "./App.css";

class App extends Component {
  state = {
    pooh,
    clickedPooh: [],
    score: 0
  };

  imageClick = event => {
    const currentPooh = event.target.alt;
    const PoohAlreadyClicked =
      this.state.clickedPooh.indexOf(currentPooh) > -1;

    if (PoohAlreadyClicked) {
      this.setState({
        pooh: this.state.pooh.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedPooh: [],
        score: 0
      });
        alert("Game Over!");

    } else {
      this.setState(
        {
          pooh: this.state.pooh.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedPooh: this.state.clickedPooh.concat(
            currentPooh
          ),
          score: this.state.score + 1
        },


//if you get all 12 pictures correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              pooh: this.state.pooh.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedPooh: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.pooh.map(pooh => (
            <FriendCard
              imageClick={this.imageClick}
              id={pooh.id}
              key={pooh.id}
              image={pooh.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
