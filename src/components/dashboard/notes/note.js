import React from "react";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.state = { ...props.data, active: false };
  }

  // componentDidUpdate() {
  //   const close = () => {
  //     this.saveNote();
  //     window.removeEventListener("click", handleEventListener);
  //   };

  //   const handleEventListener = (event) => {
  //     const flyoutElement = document.getElementById(this.state.id);
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

  render() {
    let color = this.state.color;
    let background = "bg-" + color + "-100 "; //background color of the note
    let outline = "ring-" + color + "-400 "; // outline of the note
    // let placeholder = "placeholder-" + color + "-400 "; // placeholder color
    let active;

    let layout;
    if (this.state.active === true) {
      active = "relative";
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
          <div>{this.state.content}</div>
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
