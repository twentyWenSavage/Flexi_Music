// src/convex/authenticateUser.ts
import { mutation } from "../_generated/server";
import { v } from "convex/values";

interface User {
  password: string;
  spotifyAccessToken: string;
  youtubeMusicAccessToken: string;
  appleMusicAccessToken: string;
}

// Dummy user authentication information
// In a real application, this should be securely managed and checked against a database or authentication service
const USERS: Record<string, User> = {
  'user@example.com': {
    password: 'securepassword', // This is just an example. Never store passwords in plain text.
    spotifyAccessToken: 'userSpotifyAccessToken', // Obtained through Spotify's OAuth flow
    youtubeMusicAccessToken: 'userYoutubeMusicAccessToken', // Obtained through Google's OAuth flow
    appleMusicAccessToken: 'userAppleMusicAccessToken', // Obtained through Apple's OAuth flow
  },
};

export default mutation({
  args: {
    email: v.string(),
    password: v.string(),
    platform: v.string(),
  },
  handler: async ({ db }, { email, password, platform }) => {
    const user = USERS[email]; // Use bracket notation to access the user by email
    if (!user || user.password !== password) {
      throw new Error('Authentication failed');
    }

    // Depending on the platform, different handling or token retrieval may be needed
    switch (platform) {
      case 'Spotify':
        return { authenticated: true, accessToken: user.spotifyAccessToken };
      case 'YouTubeMusic':
        return { authenticated: true, accessToken: user.youtubeMusicAccessToken };
      case 'AppleMusic':
        return { authenticated: true, accessToken: user.appleMusicAccessToken };
      default:
        throw new Error('Unsupported platform');
    }
  },
});
