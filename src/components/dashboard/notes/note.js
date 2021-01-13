import React from "react";
import TextClamp from "react-string-clamp";
import './../../../index.css';

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
    let shadow;

    let layout;
    if (this.state.active === true) {
      //LAYOUT WHEN NOTE IS IN EDIT MODE
      
      active = "fixed left-2/4 move-to-center ";
      shadow = "shadow-lg ";
      layout = (
        <div className="w-144">
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
            rows={12}
          >
            {this.state.content}
          </textarea>
          <div className="flex items-end flex-col">
            <div className={"pr-2 text-" + color + "-400"}>
              Last edit: today
            </div>
            <div
              onClick={this.saveNote}
              className={"pr-2 text-" + color + "-400 cursor-pointer"}
            >
              Save
            </div>
          </div>
        </div>
      );
    } else {
      active = " ";
      shadow = " ";
      layout = (
        <div onDoubleClick={this.handleClick} id={this.state.id} >
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
          "ring-2 p-2 mx-4 my-2  rounded max-h-96 " +
          background +
          outline +
          active +
          shadow
        }
      >
        {layout}
      </div>
    );
  }
}

export default Note;
