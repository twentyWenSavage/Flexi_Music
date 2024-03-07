// App.tsx
import React from 'react';
import MigrationForm from './components/MigrationForm';
import { useMutation } from 'convex/react'; // This import path is correct for using Convex with React
import './components/App.css';

// Define the structure of the migration data
interface MigrationData {
  sourcePlaylistUrl: string;
  destinationPlatform: string;
}

function App() {
  // Initialize the mutation with the name of your Convex function
  const migratePlaylist = useMutation('migratePlaylist');

  const handleMigration = async (data: MigrationData) => {
    // Use the mutatePlaylist function here, passing in necessary arguments
    try {
      // Assuming your migratePlaylist function takes the URL and platform as arguments
      const result = await migratePlaylist(data.sourcePlaylistUrl, data.destinationPlatform);
      // Handle the result of the migration
      console.log('Migration result:', result);
    } catch (error) {
      console.error('Migration error:', error);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Flexi Music Playlist Migrator</h1>
      </header>
      <main>
        <MigrationForm onMigrate={handleMigration} />
      </main>
      <footer className="app-footer">
        © 2024 Playlist Migrator, Inc.
      </footer>
    </div>
  );
}

export default App;
