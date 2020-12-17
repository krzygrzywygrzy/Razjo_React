import React from "react";
import NoteOptions from "./options";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeColor = this.changeColor.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.state = {
      active: false,
      color: "gray",
      title: "",
      content: "",
    };
  }

  componentDidUpdate() {
    const close = () => {
      this.saveNote();
      window.removeEventListener("click", handleEventListener);
    };

    const handleEventListener = (event) => {
      const flyoutElement = document.getElementById("note");
      let targetElement = event.target;

      do {
        if (targetElement === flyoutElement) {
          return;
        }
        targetElement = targetElement.parentNode;
      } while (targetElement);

      close();
    };

    if (this.state.active === true) {
      setTimeout(function () {
        window.addEventListener("click", handleEventListener);
      }, 50);
    }
  }

  saveNote() {
    this.setState({
      active: false,
      color: "gray",
      title: "",
      content: "",
    });

    //TODO: add to redux store
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
    let background = "bg-" + this.state.color + "-100 "; //background color of the note
    let outline = "ring-" + this.state.color + "-400 "; // outline of the note
    let placeholder = "placeholder-" + this.state.color + "-400 "; // placeholder color

    const isActive = this.state.active;
    let options; // options in the bottom of the note
    let layout; // the layout of the card
    if (isActive) {
      options = (
        <div className="flex justify-center" id="note">
          <NoteOptions
            color={this.state.color}
            changeColor={this.changeColor}
          />
        </div>
      );
      layout = (
        <div id="note">
          <div>
            <input
              type="text"
              placeholder="Title"
              className={
                "text-lg focus:outline-none w-full " + background + placeholder
              }
            />
            <br />
            {/* TODO: auto resize textarea to match the content */}
            <textarea
              placeholder="type here..."
              className={
                "resize-none focus:outline-none w-full overflow-hidden " +
                background +
                placeholder
              }
              autoFocus
            ></textarea>
          </div>
          {options}
        </div>
      );
    } else {
      options = <div></div>;
      layout = <span className="px-2 text-gray-400">type here</span>;
    }

    return (
      <div
        onClick={this.handleClick}
        className={"ring-2 p-2 rounded " + background + outline}
      >
        {layout}
      </div>
    );
  }
}

export default NewNote;
