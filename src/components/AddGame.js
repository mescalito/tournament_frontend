import React from "react";
import { connect } from "react-redux";
import { addGame } from "../redux/actions";

class AddGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstPlayer: "nico", 
      secondPlayer: "caty",
      firstPlayerScore: 0,
      secondPlayerScore: 0
     };
  }

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleAddGame = () => {
    // dispatches actions to add todo
    this.props.addGame(this.state);
    // sets state back to empty string
    this.setState({ 
      firstPlayer: "nico", 
      secondPlayer: "caty",
      firstPlayerScore: 0,
      secondPlayerScore: 0
     });
  };

  render() {
    return (
      <div>
        <div>
          <span>First Player: </span>
        </div>
        <div>
          <span>Name: </span>
          <input
            name="firstPlayer"
            onChange={this.handleChange}
            value={this.state.firstPlayer}
          />
          <span>Score: </span>
          <input
            name="firstPlayerScore"
            onChange={this.handleChange}
            value={this.state.firstPlayerScore}
          />
        </div>
        <span>vs: </span>
        <div>
          <span>Second Player: </span>
        </div>
        <div>
          <span>Name: </span>
          <input
            name="secondPlayer"
            onChange={this.handleChange}
            value={this.state.secondPlayer}
          />
          <span>Score: </span>
          <input
            name="secondPlayerScore"
            onChange={this.handleChange}
            value={this.state.secondPlayerScore}
          />
        </div>
        <button className="add-game" onClick={this.handleAddGame}>
          Add Game
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addGame }
)(AddGame);
