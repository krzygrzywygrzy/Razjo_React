import React from "react";
import { connect } from "react-redux";
import Note from "./note";
import Searchbar from "./searchbar";

//TODO: design in Adobe XD

function Dashboard(props) {
  let { notes } = props;
  console.log(notes);
  return (
    <div className="grid md:grid-cols-4">
      {/* left section */}
      <div className="md:col-span-1 bg-red-400 p-2 min-h-screen mr-2">
        <div className="grid md:grid-cols-12">
          {/* Callendar nad notifications */}
          <div className="col-span-9">
            <div className="text-2xl text-white">Callendar</div>
            <div className="text-2xl text-white">Notifications</div>
          </div>
          {/* Patients list */}
          <div className="col-span-3"></div>
        </div>
      </div>
      {/* right section*/}
      <div className="md:col-span-3 p-2">
        {/* top section -> Title & account info */}
        <div className="grid grid-cols-3 pb-2">
          {/* searchbar */}
          <div className="col-span-2">
            <Searchbar />
          </div>
          {/* account */}
          <div className="col-span-1">account</div>
        </div>

        {/* notes section */}
        <div className="grid grid-cols-3">
          {/* Notes of the patients */}
          <div className="col-span-2">
            <div className="flex flex-row flex-wrap">
              {/*Display notes*/}
              {notes.map((item) => {
                return (
                  <div key={item.key} className="w-1/4">
                    <Note data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Private notes */}
          <div className="col-span-1">
            Private notes
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps)(Dashboard);
