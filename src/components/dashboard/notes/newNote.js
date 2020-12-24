import React from "react";
import NoteOptions from "./options";
import { connect } from "react-redux";

class NewNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      color: "gray",
      title: "",
      content: "",
    };
  }

  handleClick = () => {
    let state = this.state;
    state.active = true;
    this.setState(state);
  }

  changeColor = (color) => {
    let state = this.state;
    state.color = color;
    this.setState(state);
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  save = () => {
    this.props.addNote({
      title: this.state.title,
      content: this.state.content,
      color: this.state.color,
      id: 12,
    });
  };

  render() {
    let background = "bg-" + this.state.color + "-100 "; //background color of the note
    let outline = "ring-" + this.state.color + "-400 "; // outline of the note
    let placeholder = "placeholder-" + this.state.color + "-400 "; // placeholder color

    const isActive = this.state.active;
    let options; // options in the bottom of the note
    let layout; // the layout of the card
    if (isActive) {
      options = (
        <div className="flex justify-between" id="note">
          <NoteOptions
            color={this.state.color}
            changeColor={this.changeColor}
          />

          <div
            className={"mr-2 text-" + this.state.color + "-400 cursor-pointer "}
            onClick={this.save}
          >
            Save
          </div>
        </div>
      );
      layout = (
        <div id="note">
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              placeholder="Title"
              id="title"
              value={this.state.title}
              className={
                "text-lg focus:outline-none w-full " + background + placeholder
              }
            />
            <br />
            {/* TODO: auto resize textarea to match the content */}
            <textarea
              onChange={this.handleChange}
              placeholder="type here..."
              id="content"
              value={this.state.content}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addNote: (note) => {
      dispatch({
        type: "ADD_PRIVATE",
        note: note,
      });
    },
  };
};

export default connect(null, mapDispatchToProps)(NewNote);

// componentDidUpdate() {
//   const close = () => {
//     this.saveNote();
//     window.removeEventListener("click", handleEventListener);
//   };

//   const handleEventListener = (event) => {
//     const flyoutElement = document.getElementById("note");
//     let targetElement = event.target;

//     do {
//       if (targetElement === flyoutElement) {
//         return;
//       }
//       targetElement = targetElement.parentNode;
//     } while (targetElement);

//     close();
//   };

//   if (this.state.active === true) {
//     setTimeout(function () {
//       window.addEventListener("click", handleEventListener);
//     }, 50);
//   }
// }
