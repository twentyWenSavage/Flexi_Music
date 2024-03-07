// migratePlaylist.ts
import { mutation } from "../_generated/server";
import { Id } from "../_generated/dataModel";

interface Playlist {
  name: string;
  tracks: Track[];
}

interface Track {
  title: string;
  artist: string;
  // Add any additional track properties here
}

// Assuming `createPlaylistOnPlatform` is correctly implemented
async function createPlaylistOnPlatform(destinationPlatform: string, tracks: Track[]): Promise<string> {
  // Logic to create playlist on the destination platform
}

export default mutation(async ({ db }, sourcePlaylistId: Id<"playlists">, destinationPlatform: string) => {
  // Correctly typecast the returned document
  const sourcePlaylist = await db.table('playlists').doc(sourcePlaylistId).get() as Playlist | undefined;
  if (!sourcePlaylist) {
    throw new Error('Playlist not found');
  }

  const newPlaylistId = await createPlaylistOnPlatform(destinationPlatform, sourcePlaylist.tracks);

  // Make sure you are using the correct update syntax
  await db.table('playlists').doc(sourcePlaylistId).update({
    migratedTo: destinationPlatform,
    newPlaylistId: newPlaylistId,
  });

  return { success: true, newPlaylistId };
});
