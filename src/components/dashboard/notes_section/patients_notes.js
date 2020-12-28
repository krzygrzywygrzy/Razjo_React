import React from "react";
import Note from "../notes/note";

class PatientNotes extends React.Component {
  //TODO: place notes into the column
  constructor(props) {
    super(props);
    this.state = {
      columns: 3,
    };
  }

  render() {
    return (
      <div className="flex flex-row flex-wrap">
        {this.props.notes.map((item) => {
          return (
            <div key={item.id} className={"w-1/2 lg:w-1/3"} >
              <Note data={item}  />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PatientNotes;
