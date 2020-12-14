import React from "react";
import { connect } from "react-redux";
import Avatar from "./avatar";
import Calendar from "./calendar";
import Navbar from "./navbar";
import Note from "./note";

function Dashboard(props) {
  let { notes, privateNotes } = props;
  
  return (
    <div className="grid lg:grid-cols-4 lg:min-h-screen">
      <div className="lg:hidden">
        <Navbar />
      </div>
      {/* left section */}
      <div className="lg:col-span-1 bg-red-400 pl-2 pb-2 pt-2">
        <div className="grid lg:grid-cols-6">
          {/* Callendar nad notifications */}
          <div className="col-span-5">
            <Calendar />
          </div>
          <div className="lg:ml-2">
            {/* Patients list */}
            {/* on large screen */}
            <div className="col-span-1 border-l-2  justify-center hidden lg:flex ">
              <div>
                {/*TODO: when api done change to real accounts */}
                <Avatar label="PP" />
                <Avatar label="JD" />
                <Avatar label="JP" />
                <Avatar label="KKK" />
              </div>
            </div>
            {/*on small screen */}
            <div className="lg:hidden flex flex-row pt-2">
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
        {/* display on large screen */}
        <div className="hidden lg:block">
          <Navbar />
        </div>

        {/* notes section */}
        <div className="lg:grid lg:grid-cols-3">
          {/* Notes of the patients */}
          <div className="lg:col-span-2">
            <div className="flex flex-row flex-wrap">
              {/*Display notes*/}
              {notes.map((item) => {
                return (
                  <div key={item.key} className="w-1/2 lg:w-1/3">
                    <Note data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Private notes */}
          <div className="lg:col-span-1 lg:border-l-2">
            {/* Display Notes */}
            {privateNotes.map((item) => {
              return (
                <div key={item.key} className="w-1/2">
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
