// App.tsx
import React, { useState } from 'react';
import { useMutation } from 'convex/react';
import MigrationForm from './components/MigrationForm';
import AddPlaylistForm from './components/AddPlaylistForm.tsx';
import './components/App.css';
import { api } from "../convex/_generated/api";
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

function App() {
  const migratePlaylist = useMutation(api.functions.migratePlaylist.default);
  const [statusMessage, setStatusMessage] = useState('');
  const [playlistURL, setPlaylistURL] = useState('');
  const [destinationPlatform, setDestinationPlatform] = useState('');

  const handleMigration = async () => {
    try {
      // Here we are directly passing the playlistURL to the mutation.
      // Your backend mutation must be adapted to accept this argument.
      const result = await migratePlaylist({ playlistURL, destinationPlatform });
      setStatusMessage('Playlist migrated successfully!');
      console.log('Migration result:', result);
    } catch (error) {
      setStatusMessage('Error migrating playlist.');
      console.error('Migration error:', error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Flexi Music Playlist Migrator</h1>
      </header>
      <main>
        <div>
          <label htmlFor="playlistURL">Playlist URL:</label>
          <Input
            id="playlistURL"
            placeholder="Enter playlist URL here"
            value={playlistURL}
            onChange={(e) => setPlaylistURL(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="destinationPlatform">Destination Platform:</label>
          <select
            value={destinationPlatform}
            onChange={(e) => setDestinationPlatform(e.target.value)}
          >
            <option value="">Select Platform</option>
            <option value="Apple Music">Apple Music</option>
            <option value="Spotify">Spotify</option>
            <option value="YouTube Music">YouTube Music</option>
          </select>
        </div>
        <Button onClick={handleMigration}>
          Migrate Playlist
        </Button>
        {statusMessage && <p>{statusMessage}</p>}
      </main>
      <footer className="app-footer">
        © 2024 Playlist Migrator, Inc.
      </footer>
    </div>
  );
}

export default App;