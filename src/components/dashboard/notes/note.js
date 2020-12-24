import React from "react";
import TextClamp from 'react-string-clamp';

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { ...props.data, active: false };
  }

  handleClick() {
    let state = this.state;
    state.active = true;
    this.setState({ state });
  }

  saveNote() {
    let state = this.state;
    state.active = false;
    this.setState(state);
  }

  handleChange(){}

  render() {
    let color = this.state.color;
    let background = "bg-" + color + "-100 "; //background color of the note
    let outline = "ring-" + color + "-400 "; // outline of the note
    // let placeholder = "placeholder-" + color + "-400 "; // placeholder color
    let active;

    let layout;
    if (this.state.active === true) {
      active = "absolute";
      layout = (
        <div>
          <input
            value={this.state.title}
            className={background + "focus:outline-none w-full"}
          />
          <br />
        </div>
      );
    } else {
      active = "";
      layout = (
        <div onClick={this.handleClick} id={this.state.id}>
          <div className="text-md">{this.state.title}</div>
          <div>
            <TextClamp text={this.state.content} lines={12} />
          </div>
        </div>
      );
    }

    return (
      <div
        className={
          "ring-2 p-2 mx-4 my-2  rounded max-h-96   " +
          background +
          outline +
          active
        }
      >
        {layout}
      </div>
    );
  }
}

export default Note;
