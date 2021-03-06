import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      grads: [
        "Alex",
        "Stas",
        "Yan",
        "April",
        "Max",
        "mark",
        "Mike D",
        "Nelson",
        "AAron",
        "Carlos",
        "Leslie",
        "Peter"
      ],
      pairs: []
    };
  }

  randomize = () => {
    let array = this.state.grads;
    for (let i = 0; i < array.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    this.splitPairs(array);
  };

  splitPairs(array) {
    let pairs = [];

    for (let i = 0; i < array.length; i += 2) {
      let pair = array.slice(i, i + 2);
      pairs.push(pair);
    }

    this.setState({ pairs: pairs });
  }

  render() {
    return (
      <div className="App">
        <h2>Full Stack RANDOM Algo Pairs</h2>

        <h3>LEAD INSTRUCTOR:</h3>
        <h3>
          {
            this.state.grads[
              Math.round(Math.random() * this.state.grads.length)
            ]
          }
        </h3>

        <button onClick={this.randomize}>Make pairs</button>
        {this.state.pairs.map((pair, i) => (
          <p>
            <span>Pair {i + 1}:</span> {pair.join(" ")}
          </p>
        ))}
      </div>
    );
  }
}

export default App;
