import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlbumItem extends Component {
  renderAlbumItemHeader = () => (
    <div className="album-item-header">
      <div>
        <h1>{this.props.albumName}</h1>
      </div>
      <div>
        <h3>{this.props.artist}</h3>
        <h5>{this.props.releaseDate}</h5>
      </div>
    </div>
  )

  renderAlbumItemContent = () => {
    const { artwork } = this.props;
    return (
      <div className="album-item-content">
        <div className="album-item-artwork-container">
          <img src={artwork} alt={artwork} className="album-item-artwork" />
        </div>
        <ol className="album-item-tunes-list">
          {this.renderTunes()}
        </ol>
      </div>
    );
  }

  renderTunes = () => (
    this.props.tuneListing.map((tune, index) => (
      <li key={tune}>
        <span>{index + 1}</span>
        <span>{tune}</span>
      </li>
    ))
  )

  render() {
    return (
      <div className="album-item-container">
        {this.renderAlbumItemHeader()}
        {this.renderAlbumItemContent()}
      </div>
    );
  }
}

AlbumItem.propTypes = {
  artist: PropTypes.string.isRequired,
  albumName: PropTypes.string.isRequired,
  artwork: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  tuneListing: PropTypes.array.isRequired,
};

export default AlbumItem;
