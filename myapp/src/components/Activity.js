import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActivity } from "../actions";

const Activity =  ({ getActivity, activity, type, participants, isFetching,  error }) => {
 

  useEffect(( ) => {
    // run action creator when the component mounts
    getActivity()}, [ getActivity ]);
  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
    <br/ >
<div className="activitybox">
        <div> <strong>Type:</strong> <span>{type}</span></div>
       <div> <strong>Activity:</strong> <span>{activity}</span></div>
       <div> <strong>Number Of People:</strong> <span>{participants}</span></div>
       
       
    
       </div>
   
      <button className="fetchButton" onClick={getActivity}>Fetch Activity</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    type: state.type,
    participants: state.participants,
    isFetching: state.isFetching,
    error: state.error
  };
};


// const mapDispatchToProps = { getActvity };

export default connect(mapStateToProps, {getActivity})(Activity);
