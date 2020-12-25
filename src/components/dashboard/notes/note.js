import React from "react";
import TextClamp from "react-string-clamp";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.data, active: false };
  }

  handleClick = () => {
    let state = this.state;
    state.active = true;
    this.setState({ state });
  };

  saveNote = () => {
    let state = this.state;
    state.active = false;
    this.setState(state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    let color = this.state.color;
    let background = "bg-" + color + "-100 "; //background color of the note
    let outline = "ring-" + color + "-400 "; // outline of the note
    let placeholder = "placeholder-" + color + "-400 "; // placeholder color
    let active;

    let layout;
    if (this.state.active === true) {
      //LAYOUT WHEN NOTE IS IN EDIT MODE
      active = "absolute left-1/2  ";
      layout = (
        <div className="">
          <input
            value={this.state.title}
            className={background + "focus:outline-none w-full"}
            id="title"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            className={
              "resize-none focus:outline-none w-full overflow-hidden " +
              background +
              placeholder
            }
          >
            {this.state.content}
          </textarea>
        </div>
      );
    } else {
      active = "";
      layout = (
        <div onClick={this.handleClick} id={this.state.id}>
          <div className="text-md truncate">{this.state.title}</div>
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
