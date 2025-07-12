const API_KEY = "9fc53816aa32e20ace88ab0b44046042";
const BASE_URL = "https://v3.football.api-sports.io";

export const fetchTopScorers = async (season = 2025) => {
  try {
    const response = await fetch(`${BASE_URL}/players/topscorers?league=2&season=${season}`, {
      headers: {
        "x-apisports-key": API_KEY
      }
    });
    const data = await response.json();
    console.log("Top Scorers API Response:", data); // Optional: check structure
    return data.response;
  } catch (error) {
    console.error("Failed to fetch top scorers:", error);
    return [];
  }
};