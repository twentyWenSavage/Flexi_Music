import { mutation } from "../_generated/server";
import { v } from "convex/values";

export default mutation({
  args: {
    playlist: v.object({
      destinationPlatform: v.optional(v.string()),
      newPlaylistUrl: v.optional(v.string()),
      newPlaylistId: v.optional(v.string()),
      name: v.string(),
      platform: v.string(),
      url: v.string(),
      tracks: v.array(
        v.object({
          title: v.string(),
          artist: v.string(),
          album: v.optional(v.string()),
        })
      ),
      migrated: v.boolean(),
    }),
  },
  handler: async ({ db }, args) => {
    const newPlaylist = args.playlist;
    // Insert the new playlist into the 'playlists' table
    const newPlaylistId = await db.insert("playlists", newPlaylist);
    // Return the ID of the new playlist
    return newPlaylistId;
  },
});