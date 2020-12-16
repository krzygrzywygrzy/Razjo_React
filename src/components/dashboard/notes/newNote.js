import React from "react";
import NoteOptions from "./options";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      active: false,
      color: "green",
    };
  }

  handleClick() {
    let state = this.state;
    state.active = true;
    this.setState(state);
  }

  changeColor(color) {
    let state = this.state;
    state.color = color;
    this.setState(state);
  }

  render() {
    let background;
    let outline;

    background = "bg-" + this.state.color + "-100 ";
    outline = "ring-" + this.state.color + "-400 ";

    const isActive = this.state.active;
    let options;
    if (isActive) {
      options = (
        <div>
          <NoteOptions
            color={this.state.color}
            changeColor={this.changeColor}
          />
        </div>
      );
    } else {
      options = <div></div>;
    }

    return (
      <div
        onClick={this.handleClick}
        className={"ring-2 p-2 rounded " + background + outline}
      >
        <span>type here</span>
        {options}
      </div>
    );
  }
}

export default NewNote;
