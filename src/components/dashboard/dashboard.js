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
        <div className="text-2xl text-white">Callendar</div>
        <div className="text-2xl text-white">Notifications</div>
      </div>
      {/* right section*/}
      <div className="md:col-span-2 p-2">
        {/* top section -> Title & account info */}
        <div className="flex flex-row justify-center">
          <Searchbar />
        </div>
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
      <div className="md:col-span-1 p-2">
        <div>Account</div>
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
