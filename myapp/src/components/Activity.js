import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getActivity } from "../actions";

const Activity = ({ getActivity, activity, type, isFetching,participants ,  error }) => {
  
// export const props = ({ getActivity, activity, type, isFetching, error});

  useEffect(( ) => {
    // run action creator when the component mounts
    getActivity()}, [getActivity]);
  if (isFetching) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>ACTIVITY</h1>
     
        <h3>{activity}</h3>
        <h4>{type}</h4>
        <h4> {participants}</h4>
       
    
      
   
      <button onClick={getActivity}>Fetch Activity</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    activity: state.activity,
    type: state.type,
    isFetching: state.isFetching,
    error: state.error
  };
};


// const mapDispatchToProps = { getActvity };

export default connect(mapStateToProps, {getActivity})(Activity);
