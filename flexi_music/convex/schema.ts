import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // The 'playlists' table might store the source playlist information
  playlists: defineTable({
    name: v.string(),
    platform: v.string(),
    url: v.string(),
    tracks: v.array(
      v.object({
        title: v.string(),
        artist: v.string(),
        album: v.optional(v.string()),
        url: v.optional(v.string()),
        uri: v.optional(v.string()),
      })
    ),
    migrated: v.boolean(),
    destinationPlatform: v.optional(v.string()),
    newPlaylistUrl: v.optional(v.string()),
    newPlaylistId: v.optional(v.string()), // Add this line if it's a new field
  }),

  

  // Additional tables can be defined as needed for your application
  // ...

  // The existing 'numbers' table from the original schema
  numbers: defineTable({
    value: v.number(),
  }),

  supportedPlatforms: defineTable({
    name: v.string(), // Platform name, e.g., 'Spotify', 'Apple Music', 'YouTube Music'
  }),

}, {
  schemaValidation: true
});

export interface Track {
  title: string;
  artist: string;
  album?: string; // The '?' makes this property optional
  url?: string;
  uri?: any;
  // ...any other properties a track might have
}

// You can add more shared types or interfaces here, which can be imported in other files.

