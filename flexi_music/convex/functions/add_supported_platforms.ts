// add-supported-platforms.ts
import { mutation } from "../_generated/server";
import { v } from "convex/values";

// Mutation to add a supported platform to the database
export const addSupportedPlatform = mutation({
  args: { platformName: v.string() },
  handler: async ({ db }, { platformName }) => {
    await db.insert('supportedPlatforms', { name: platformName });
  },
});

// This script would be run to populate the 'supportedPlatforms' table
