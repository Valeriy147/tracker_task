import './App.css';
import React from 'react';
import NewTrackerContainer from './components/NewTracker/NewTrackerContainer';
import TrackersContainer from './components/Trackers/TrackersContainer';

function App() {
  return (
    <div className="AppContainer">
      <div className="App">
        <h1 className="name">tracker</h1>
        <NewTrackerContainer />
        <TrackersContainer />
      </div>
    </div>
  );
}

export default App;
