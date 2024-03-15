import { mutation } from "../_generated/server";
import { Id } from "../_generated/dataModel";
import { v } from "convex/values";

// Define the Track type according to your data model
interface Track {
  title: string;
  artist: string;
  album?: string;
}

// Mutation to update an existing playlist in the database
export default mutation({
  args: {
    playlistId: v.id('playlists'),
    migrated: v.optional(v.boolean()),
    tracks: v.optional(v.array(v.object({
      title: v.string(),
      artist: v.string(),
      album: v.optional(v.string()),
    }))),
    // Add other fields that you might need to update
  },
  handler: async ({ db }, args: { playlistId: Id<'playlists'>, migrated?: boolean, tracks?: Track[] }) => {
    // Define the update object with optional fields
    const updateData: Partial<{ migrated: boolean; tracks: Track[] }> = {};
    if (args.migrated !== undefined) {
      updateData.migrated = args.migrated;
    }
    if (args.tracks !== undefined) {
      updateData.tracks = args.tracks;
    }
    
    // Update the playlist in the 'playlists' table
    await db.patch(args.playlistId, updateData);

    // Optionally, return a success indicator or the updated document
    return { success: true };
  },
});
