import React, { Component } from 'react';
import albums from '../api';

class AlbumList extends Component {
  logAlbums = () => {
    console.log(albums);
  };

  render() {
    this.logAlbums();
    return <h1>Some might say</h1>;
  }
}

export default AlbumList;
