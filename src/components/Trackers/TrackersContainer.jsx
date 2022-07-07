import React from 'react';
import Trackers from './Trackers';
import { connect } from 'react-redux';

class TrackersContainer extends React.Component {
  render() {
    return <Trackers />;
  }
}

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(TrackersContainer);
