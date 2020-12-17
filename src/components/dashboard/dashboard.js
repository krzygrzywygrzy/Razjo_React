import React from "react";
import { connect } from "react-redux";
import Avatar from "./avatar";
import Calendar from "./calendar";
import Navbar from "./navbar";
import Note from "./notes/note";
import Searchbar from "./searchbar";
import { FaPlus } from "react-icons/fa";
import NewNote from "./notes/newNote";

function Dashboard(props) {
  let { notes, privateNotes } = props;

  return (
    <div className="grid lg:grid-cols-4 lg:min-h-screen">
      <div className="lg:hidden">
        <Navbar />
      </div>
      {/* left section */}
      <div className="lg:col-span-1 bg-red-400 pl-2 pb-2 pt-2 shadow-md ">
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
                <Avatar label="+" />
                <Avatar label="PP" />
                <Avatar label="JD" />
                <Avatar label="JP" />
                <Avatar label="KKK" />
              </div>
            </div>
            {/*on small screen */}
            <div className="lg:hidden flex flex-row pt-4">
              <Avatar label="+" />
              <Avatar label="PP" />
              <Avatar label="JD" />
              <Avatar label="JP" />
              <Avatar label="KKK" />
            </div>
          </div>
        </div>
      </div>

      {/* right section*/}
      <div className="lg:col-span-3 bg-gray-50">
        {/* top section -> Title & account info */}
        {/* display on large screen */}
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="p-4 flex justify-center lg:hidden">
          <Searchbar />
        </div>

        {/* notes section */}

        {/* new note field */}
        <div className="lg:flex justify-center hidden  my-4">
          <div className="w-2/5 ">
            <NewNote />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-5">
          {/* Notes of the patients */}

          <div className="lg:col-span-3">
            <span className=" p-4 text-gray-400">Patients notes</span>
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
          <div className="lg:col-span-2 lg:border-l-1">
            <span className=" p-4 text-gray-400">Your private notes</span>
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
      {/*Add new note button -> show only on little screen */}
      <div className="p-3 bg-red-400 fixed rounded-full text-white bottom-4 right-4 shadow-lg lg:hidden">
        <FaPlus size={25} />
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
