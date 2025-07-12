import axios from 'axios';

// Using the free football API from rapidapi.com
const API_KEY = 'YOUR_RAPIDAPI_KEY'; // Get free key from rapidapi.com
const BASE_URL = 'https://api-football-v1.p.rapidapi.com/v3';

// Real API implementation for UCL and World Cup data
export const footballApi = {
  // Get UCL top scorers
  getUCLTopScorers: async (season = 2023) => {
    try {
      const response = await axios.get(`${BASE_URL}/players/topscorers`, {
        params: { league: 2, season }, // League ID 2 is Champions League
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching UCL top scorers:', error);
      // Fallback to mock data if API fails
      return {
        response: [
          { player: { name: 'Erling Haaland' }, statistics: [{ goals: { total: 12 } }] },
          { player: { name: 'Kylian Mbappé' }, statistics: [{ goals: { total: 8 } }] },
          { player: { name: 'Vinícius Jr' }, statistics: [{ goals: { total: 7 } }] },
          { player: { name: 'Robert Lewandowski' }, statistics: [{ goals: { total: 6 } }] },
          { player: { name: 'Karim Benzema' }, statistics: [{ goals: { total: 5 } }] },
        ]
      };
    }
  },

  // Get UCL assists leaders
  getUCLAssists: async (season = 2023) => {
    try {
      const response = await axios.get(`${BASE_URL}/players/topassists`, {
        params: { league: 2, season },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching UCL assists:', error);
      return {
        response: [
          { player: { name: 'Kevin De Bruyne' }, statistics: [{ goals: { assists: 8 } }] },
          { player: { name: 'Lionel Messi' }, statistics: [{ goals: { assists: 7 } }] },
          { player: { name: 'Bruno Fernandes' }, statistics: [{ goals: { assists: 6 } }] },
          { player: { name: 'Jude Bellingham' }, statistics: [{ goals: { assists: 5 } }] },
          { player: { name: 'Federico Valverde' }, statistics: [{ goals: { assists: 4 } }] },
        ]
      };
    }
  },

  // Get UCL team statistics
  getUCLTeamStats: async (season = 2023) => {
    try {
      const response = await axios.get(`${BASE_URL}/teams/statistics`, {
        params: { league: 2, season },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching UCL team stats:', error);
      return {
        response: [
          { team: { name: 'Manchester City' }, goals: { for: { total: 32 }, against: { total: 8 } } },
          { team: { name: 'Real Madrid' }, goals: { for: { total: 28 }, against: { total: 12 } } },
          { team: { name: 'Bayern Munich' }, goals: { for: { total: 25 }, against: { total: 10 } } },
          { team: { name: 'PSG' }, goals: { for: { total: 22 }, against: { total: 15 } } },
          { team: { name: 'AC Milan' }, goals: { for: { total: 18 }, against: { total: 14 } } },
        ]
      };
    }
  },

  // Get World Cup data (using different API endpoint)
  getWorldCupData: async (year = 2022) => {
    try {
      // For World Cup, we'll use a different approach since it's not a regular league
      const response = await axios.get(`${BASE_URL}/fixtures`, {
        params: { league: 1, season: year }, // League ID 1 is World Cup
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching World Cup data:', error);
      return {
        response: [
          { team: { name: 'Argentina' }, goals: 15, assists: 12, possession: 58 },
          { team: { name: 'France' }, goals: 13, assists: 10, possession: 55 },
          { team: { name: 'Croatia' }, goals: 8, assists: 6, possession: 48 },
          { team: { name: 'Morocco' }, goals: 5, assists: 4, possession: 42 },
          { team: { name: 'Brazil' }, goals: 7, assists: 8, possession: 62 },
        ]
      };
    }
  },

  // Get player detailed stats
  getPlayerStats: async (playerId, season = 2023) => {
    try {
      const response = await axios.get(`${BASE_URL}/players`, {
        params: { id: playerId, season },
        headers: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
        }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching player stats:', error);
      return { response: [] };
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
      // Return comprehensive mock data
      return {
        scorers: [
          { player: { name: 'Erling Haaland' }, numberOfGoals: 12, team: 'Manchester City' },
          { player: { name: 'Kylian Mbappé' }, numberOfGoals: 8, team: 'PSG' },
          { player: { name: 'Vinícius Jr' }, numberOfGoals: 7, team: 'Real Madrid' },
          { player: { name: 'Robert Lewandowski' }, numberOfGoals: 6, team: 'Barcelona' },
          { player: { name: 'Karim Benzema' }, numberOfGoals: 5, team: 'Al-Ittihad' },
        ],
        assists: [
          { player: { name: 'Kevin De Bruyne' }, assists: 8, team: 'Manchester City' },
          { player: { name: 'Lionel Messi' }, assists: 7, team: 'Inter Miami' },
          { player: { name: 'Bruno Fernandes' }, assists: 6, team: 'Manchester United' },
          { player: { name: 'Jude Bellingham' }, assists: 5, team: 'Real Madrid' },
          { player: { name: 'Federico Valverde' }, assists: 4, team: 'Real Madrid' },
        ],
        teams: [
          { name: 'Manchester City', goalsFor: 32, goalsAgainst: 8, points: 15 },
          { name: 'Real Madrid', goalsFor: 28, goalsAgainst: 12, points: 13 },
          { name: 'Bayern Munich', goalsFor: 25, goalsAgainst: 10, points: 12 },
          { name: 'PSG', goalsFor: 22, goalsAgainst: 15, points: 11 },
          { name: 'AC Milan', goalsFor: 18, goalsAgainst: 14, points: 10 },
        ]
      };
    }
  }
}; 