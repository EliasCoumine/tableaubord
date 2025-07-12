import axios from 'axios';

// Using the free football API from rapidapi.com
// You can get a free API key from: https://rapidapi.com/api-sports/api/api-football/
const API_KEY = process.env.REACT_APP_FOOTBALL_API_KEY || '9fc53816aa32e20ace88ab0b44046042';
const BASE_URL = process.env.REACT_APP_FOOTBALL_API_URL || 'https://v3.football.api-sports.io';

// Real API implementation for UCL and World Cup data
export const footballApi = {
  // Get UCL top scorers
  getUCLTopScorers: async (season = 2023) => {
    try {
      console.log('⚽ Fetching REAL top scorers for season:', season);
      
      const response = await axios.get(`${BASE_URL}/players/topscorers`, {
        params: { league: 2, season }, // League ID 2 is Champions League
        headers: {
          'x-apisports-key': API_KEY
        },
        timeout: 10000
      });
      
      console.log('✅ REAL Top scorers response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching UCL top scorers:', error);
      throw error;
    }
  },

  // Get UCL top assisters
  getUCLTopAssisters: async (season = 2023) => {
    try {
      console.log('🎯 Fetching REAL top assisters for season:', season);
      
      const response = await axios.get(`${BASE_URL}/players/topassists`, {
        params: { league: 2, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL Top assisters response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching UCL top assisters:', error);
      throw error;
    }
  },

  // Get UCL team statistics
  getUCLTeamStats: async (season = 2023) => {
    try {
      console.log('🏆 Fetching REAL team stats for season:', season);
      
      const response = await axios.get(`${BASE_URL}/teams/statistics`, {
        params: { league: 2, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL Team stats response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching UCL team stats:', error);
      throw error;
    }
  },

  // Get UCL standings (for average position)
  getUCLStandings: async (season = 2023) => {
    try {
      console.log('📊 Fetching REAL standings for season:', season);
      
      const response = await axios.get(`${BASE_URL}/standings`, {
        params: { league: 2, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL Standings response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching UCL standings:', error);
      throw error;
    }
  },

  // Get all player stats for goals + assists calculation
  getAllPlayerStats: async (season = 2023) => {
    try {
      console.log('👥 Fetching REAL all player stats for season:', season);
      
      const response = await axios.get(`${BASE_URL}/players`, {
        params: { league: 2, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL All player stats response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching all player stats:', error);
      throw error;
    }
  },

  // Get all teams for a league and season
  getUCLTeams: async (season = 2023) => {
    try {
      console.log('📋 Fetching all teams for season:', season);
      const response = await axios.get(`${BASE_URL}/teams`, {
        params: { league: 2, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      console.log('✅ All teams response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching all teams:', error);
      throw error;
    }
  },

  // Get World Cup data (using different API endpoint)
  getWorldCupData: async (year = 2022) => {
    try {
      console.log('🌍 Fetching REAL World Cup data for year:', year);
      
      const response = await axios.get(`${BASE_URL}/fixtures`, {
        params: { league: 1, season: year }, // League ID 1 is World Cup
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL World Cup API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching World Cup data:', error);
      throw error;
    }
  },

  // Get player detailed stats
  getPlayerStats: async (playerId, season = 2023) => {
    try {
      console.log('👤 Fetching REAL player stats for player ID:', playerId);
      
      const response = await axios.get(`${BASE_URL}/players`, {
        params: { id: playerId, season },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      
      console.log('✅ REAL player stats API Response:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching player stats:', error);
      throw error;
    }
  },

  // Get stats for a specific team and season
  getUCLTeamStatsForTeam: async (teamId, season = 2023) => {
    try {
      console.log('📊 Fetching stats for team', teamId, 'season', season);
      const response = await axios.get(`${BASE_URL}/teams/statistics`, {
        params: { league: 2, season, team: teamId },
        headers: {
          'x-apisports-key': API_KEY
        }
      });
      // The API returns the stats object directly
      console.log('✅ Team stats for team', teamId, ':', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Error fetching stats for team', teamId, ':', error);
      throw error;
    }
  },
};

// Alternative: Use a completely free API without authentication
export const freeFootballApi = {
  // Get free football data from a public API
  getFreeFootballData: async () => {
    try {
      // Using a free football API that doesn't require authentication
      const response = await axios.get('https://api.football-data.org/v2/competitions/CL/scorers', {
        headers: {
          'X-Auth-Token': 'YOUR_FREE_TOKEN' // Get free token from football-data.org
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching free football data:', error);
      throw error;
    }
  }
}; 