import React from 'react';
import Tracker from './Tracker';
import { connect } from 'react-redux';

class TrackerContainer extends React.Component {
  render() {
    return <Tracker />;
  }
}

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(TrackerContainer);
