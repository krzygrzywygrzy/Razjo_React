import React from "react";
import { connect } from "react-redux";
import Avatar from "./avatar";
import Calendar from "./calendar";
import Navbar from "./navbar";
import Note from "./note";

//TODO: design in Adobe XD

function Dashboard(props) {
  let { notes, privateNotes } = props;
  return (
    <div className="grid lg:grid-cols-4 min-h-screen">
      {/* left section */}
      <div className="lg:col-span-1 bg-red-400 pl-2 pb-2 pt-2">
        <div className="grid lg:grid-cols-6">
          {/* Callendar nad notifications */}
          <div className="col-span-5">
            <Calendar />
          </div>
          {/* Patients list */}
          <div className="col-span-1 border-l-2 flex justify-center ">
            <div>
              {/*TODO: when api done change to real accounts */}
              <Avatar label="PP" />
              <Avatar label="JD" />
              <Avatar label="JP" />
              <Avatar label="KKK" />
            </div>
          </div>
        </div>
      </div>
      {/* right section*/}
      <div className="lg:col-span-3">
        {/* top section -> Title & account info */}
        <Navbar />

        {/* notes section */}
        <div className="grid grid-cols-3">
          {/* Notes of the patients */}
          <div className="col-span-2">
            <div className="flex flex-row flex-wrap">
              {/*Display notes*/}
              {notes.map((item) => {
                return (
                  <div key={item.key} className="sm:w-1/2 lg:w-1/3">
                    <Note data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Private notes */}
          <div className="col-span-1 border-l-2">
            {/* Display Notes */}
            {privateNotes.map((item) => {
              return (
                <div key={item.key}>
                  <Note data={item} />
                </div>
              );
            })}
          </div>
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

export default connect(mapStateToProps)(Dashboard);
