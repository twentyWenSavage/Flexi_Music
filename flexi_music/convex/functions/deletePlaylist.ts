import { mutation } from "../_generated/server";
import { Id } from "../_generated/dataModel";
import { v } from "convex/values";

// Mutation to delete a playlist from the database
export default mutation({
  args: {
    playlistId: v.id('playlists'),
  },
  handler: async ({ db }, args: { playlistId: Id<'playlists'> }) => {
    // Delete the playlist with the provided ID from the 'playlists' table
    await db.delete(args.playlistId);

    // Optionally, return a success indicator
    return { success: true };
  },
});
