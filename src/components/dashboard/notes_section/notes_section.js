import React from "react";
import { connect } from "react-redux";
import Note from './../notes/note';

function NotesSection(props) {
  const { notes, privateNotes } = props;

  return (
    <div className="lg:grid lg:grid-cols-5">
      {/* Notes of the patients */}
      <div className="lg:col-span-3">
        <span className=" p-4 text-gray-400">Patients notes</span>
        <div className="flex flex-row flex-wrap">
          {/*Display notes*/}
          {notes.map((item) => {
            return (
              <div key={item.id} className="w-1/2 lg:w-1/3">
                <Note data={item} />
              </div>
            );
          })}
        </div>
      </div>
      {/* Private notes */}
      <div className="lg:col-span-2 lg:border-l-1">
        <span className=" p-4 text-gray-400">Your private notes</span>

        <div className="flex flex-row flex-wrap">
          {/* Display Notes */}
          {privateNotes.map((item) => {
            return (
              <div key={item.id} className="w-1/2">
                <Note data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    privateNotes: state.privateNotes,
  };
};

export default connect(mapStateToProps)(NotesSection);
