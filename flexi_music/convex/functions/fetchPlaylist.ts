// fetchPlaylist.ts
import { query } from "../_generated/server";
import { Id } from "../_generated/dataModel";
import { v } from "convex/values";
import { Track } from '../schema';

interface Playlist {
  _id: Id<"playlists">;
  _creationTime: number;
  name: string;
  platform: string;
  url: string;
  tracks: Track[];
  migrated: boolean;
  destinationPlatform?: string;
  newPlaylistUrl?: string;
}

// A query to fetch a playlist by ID
export const fetchPlaylist = query({
  args: {
    playlistId: v.id("playlists"),
  },
  handler: async ({ db }, { playlistId }): Promise<Playlist | null> => {
    const playlist = await db.get<"playlists">(playlistId);
    if (!playlist) {
      throw new Error('Playlist not found');
    }
    return playlist;
  },
});

