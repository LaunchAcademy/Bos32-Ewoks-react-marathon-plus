import React, { Fragment } from 'react';
import PlaylistCollection from './PlaylistCollection';
import SongCollection from './SongCollection'

const App = (props) => {

  return (
    < Fragment >
    <div className="grid-container app">
      <h1 className="title">React Music Player</h1>
      < PlaylistCollection data={props.data}/>
    < SongCollection data={props.data.songs}/>
    </div>
    </Fragment>
  );
}

export default App
