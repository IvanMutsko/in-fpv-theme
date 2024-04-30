import axios from "axios";

const API_URL = "https://youtube.googleapis.com/youtube/v3/playlistItems";
const apiKey = process.env.API_KEY;

export const fetchVideos = async (playlistID, token = "") => {
  const params = {
    params: {
      part: "snippet",
      maxResults: 10,
      playlistId: playlistID,
      key: apiKey,
      pageToken: token,
    },
  };

  try {
    const { data } = await axios.get(API_URL, params);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
