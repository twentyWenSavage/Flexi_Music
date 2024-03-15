import { query } from "../_generated/server";
import { v } from "convex/values";

// Query to check if a given platform is supported by fetching from the database
export const isPlatformSupported = query({
  args: {
    platform: v.string(),
  },
  handler: async ({ db }, { platform }) => {
    // Assuming you have a 'supportedPlatforms' table where each document has a 'name' field
    const platformRecord = await db
      .query('supportedPlatforms')
      .filter((q) => q.eq(q.field('name'), platform))
      .first();
  
    return platformRecord !== null;
  },
});
