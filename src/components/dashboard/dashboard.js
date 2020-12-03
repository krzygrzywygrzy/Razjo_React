import React from "react";
import { connect } from "react-redux";

//TODO: design in Adobe XD

function Dashboard(props) {
  let { notes } = props;
  console.log(notes);
  return (
    <div className="grid md:grid-cols-4">
      {/* left section */}
      <div className="md:col-span-1 bg-red-400 p-2 min-h-screen">
        <div className="text-2xl text-white">Callendar</div>
      </div>
      {/* right section*/}
      <div className="md:col-span-3 p-2">
        {/* top section -> Title & account info */}
        <div className="flex flex-row justify-between">
          <div className="text-2xl text-gray-600">Notes</div>
          <div>Account</div>
        </div>
        <div>{/*Display notes*/}</div>
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
