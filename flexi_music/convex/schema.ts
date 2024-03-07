import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // The 'playlists' table might store the source playlist information
  playlists: defineTable({
    name: v.string(), // Name of the playlist
    platform: v.string(), // Platform of the playlist (e.g., 'Spotify', 'YouTube Music', etc.)
    url: v.string(), // URL of the playlist on the source platform
    tracks: v.array(
      v.object({ // Array of tracks in the playlist
        title: v.string(), // Title of the track
        artist: v.string(), // Artist of the track
        album: v.string(), // Album of the track (optional)
      })
    ),
    migrated: v.boolean(), // Flag to indicate whether the playlist has been migrated
    destinationPlatform: v.string(), // Platform to which the playlist was migrated
    newPlaylistUrl: v.optional(v.string()), // URL of the playlist on the destination platform
  }),

  // Additional tables can be defined as needed for your application
  // ...

  // The existing 'numbers' table from the original schema
  numbers: defineTable({
    value: v.number(),
  }),
}, {
  schemaValidation: true
});
