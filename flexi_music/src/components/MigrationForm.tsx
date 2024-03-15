import React, { useState } from 'react';
import './MigrationForm.css';

const MigrationForm: React.FC = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string>('');
  const [destinationPlatform, setDestinationPlatform] = useState<string>('');

  const handlePlaylistChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlaylist(e.target.value);
  };

  const handlePlatformChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDestinationPlatform(e.target.value);
  };

  const handleMigration = () => {
    // Perform migration logic here
    console.log('Migrating playlist:', selectedPlaylist);
    console.log('Destination platform:', destinationPlatform);
  };

  return (
    <div className="migration-form">
      <div className="form-group">
        <label htmlFor="playlist">Select Playlist to Migrate</label>
        <input
          type="text"
          id="playlist"
          value={selectedPlaylist}
          onChange={handlePlaylistChange}
          placeholder="Enter playlist name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="platform">Select Destination Platform</label>
        <select id="platform" value={destinationPlatform} onChange={handlePlatformChange}>
          <option value="">Select Platform</option>
          <option value="spotify">Spotify</option>
          <option value="appleMusic">Apple Music</option>
          <option value="youtubeMusic">YouTube Music</option>
        </select>
      </div>
      <button className="migrate-button" onClick={handleMigration}>
        Migrate Now
      </button>
    </div>
  );
};

export default MigrationForm;