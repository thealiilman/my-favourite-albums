import React, { Component } from 'react';
import AlbumItem from '../../common/AlbumItem';
import albums from '../../../api';

class AlbumList extends Component {
  renderAlbumItems = () => (
    albums.map(album => (
      <AlbumItem
        key={album.albumName}
        artist={album.artist}
        albumName={album.albumName}
        artwork={album.albumArtwork}
        releaseDate={album.releaseDate}
        tuneListing={album.tuneListing}
      />
    ))
  )

  render() {
    return (
      <div className="album-list-container">
        {this.renderAlbumItems()}
      </div>
    );
  }
}

export default AlbumList;
