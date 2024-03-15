import React, { useState } from 'react';
import './AddPlaylistForm.css';

const AddPlaylistForm: React.FC = () => {
  const [playlistName, setPlaylistName] = useState<string>('');

  const handlePlaylistNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaylistName(e.target.value);
  };

  const handleAddPlaylist = () => {
    // Perform add playlist logic here
    console.log('Adding playlist:', playlistName);
  };

  return (
    <div className="add-playlist-form">
      <div className="form-group">
        <label htmlFor="playlistName">Enter Playlist Name</label>
        <input
          type="text"
          id="playlistName"
          value={playlistName}
          onChange={handlePlaylistNameChange}
          placeholder="Enter playlist name"
        />
      </div>
      <button className="add-playlist-button" onClick={handleAddPlaylist}>
        Add Playlist
      </button>
    </div>
  );
};

export default AddPlaylistForm;