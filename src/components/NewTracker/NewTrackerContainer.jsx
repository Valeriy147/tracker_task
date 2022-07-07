import React from 'react';
import NewTracker from './NewTracker';
import { connect } from 'react-redux';

class NewTrackerContainer extends React.Component {
  render() {
    return <NewTracker />;
  }
}

let mapStateToProps = (state) => {
  return {};
};
export default connect(mapStateToProps, {})(NewTrackerContainer);
