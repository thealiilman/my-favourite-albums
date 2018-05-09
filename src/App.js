import React from 'react';
import AlbumList from './components/views/album/';

class App extends React.Component {
  renderHeader = () => (
    <div className="content-header">
      <h1>My Favourite Albums</h1>
    </div>
  );

  render() {
    return (
      <div className="content-container">
        {this.renderHeader()}
        <AlbumList />
      </div>
    );
  }
}

export default App;
