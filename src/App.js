import React, { useState, useEffect } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { seasons, clubStats, playerStats, teamOfTheSeason, customStats2025 } from './data';
import { footballApi } from './services/footballApi';
import './services/apiTest'; // Import to run API test

function StatCard({ title, items, type, showMore, loading, error }) {
  if (loading) {
    return (
      <div className="ucl-card">
        <div className="ucl-card-header">{title}</div>
        <div className="ucl-card-body">
          <div style={{ textAlign: 'center', padding: '20px' }}>
            Loading...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="ucl-card">
        <div className="ucl-card-header">{title}</div>
        <div className="ucl-card-body">
          <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
            {error}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ucl-card">
      <div className="ucl-card-header">{title}</div>
      <div className="ucl-card-body">
        {items && items.length > 0 ? (
          items.map((item, idx) => (
            <div className="ucl-card-row" key={idx}>
              <div className="ucl-card-rank">{idx + 1}</div>
              {type === 'club' && (
                <img className="ucl-card-logo" src={item.logo} alt={item.club} />
              )}
              {type === 'player' && (
                <img className="ucl-card-avatar" src={item.avatar} alt={item.name} />
              )}
              <div className="ucl-card-info">
                <div className="ucl-card-name">{item.club || item.name}</div>
                <div className="ucl-card-sub">{item.country || item.club}</div>
              </div>
              <div className="ucl-card-value">{item.value || item.rating}</div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            No data available
          </div>
        )}
        {showMore && <div className="ucl-card-more">Show more &gt;</div>}
      </div>
    </div>
  );
}

function TeamOfTheSeason({ players }) {
  return (
    <div className="ucl-card wide">
      <div className="ucl-card-header">Team of the Season</div>
      <div className="ucl-tots-grid">
        {players.map((p, idx) => (
          <div className="ucl-tots-player" key={idx}>
            <img className="ucl-tots-avatar" src={p.avatar} alt={p.name} />
            <div className="ucl-tots-name">{p.name}</div>
            <img className="ucl-tots-logo" src={p.logo} alt={p.club} />
            <div className="ucl-tots-rating">{p.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [season, setSeason] = useState(2025);
  const club = clubStats[season];
  const player = playerStats[season];
  const tots = teamOfTheSeason[season];

  // Player Stats State
  const [topScorers, setTopScorers] = useState([]);
  const [topAssisters, setTopAssisters] = useState([]);
  const [goalsPlusAssists, setGoalsPlusAssists] = useState([]);
  const [playerRatings, setPlayerRatings] = useState([]);

  // Team Stats State
  const [teamRatings, setTeamRatings] = useState([]);
  const [goalsPerMatch, setGoalsPerMatch] = useState([]);
  const [goalsConcededPerMatch, setGoalsConcededPerMatch] = useState([]);
  const [averagePosition, setAveragePosition] = useState([]);
  const [cleanSheets, setCleanSheets] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);
      if (season === 2025) {
        // Use customStats2025 for 2024/2025
        setTopScorers(customStats2025.playerStats.topScorers);
        setTopAssisters(customStats2025.playerStats.topAssists);
        setGoalsPlusAssists(customStats2025.playerStats.goalsPlusAssists);
        setPlayerRatings(customStats2025.playerStats.ratings);
        setTeamRatings(customStats2025.teamStats.ratings);
        setGoalsPerMatch(customStats2025.teamStats.goalsPerMatch);
        setGoalsConcededPerMatch(customStats2025.teamStats.goalsConcededPerMatch);
        setAveragePosition(customStats2025.teamStats.averagePossession);
        setCleanSheets(customStats2025.teamStats.cleanSheets);
        setLoading(false);
        return;
      }
      try {
        console.log('🚀 Fetching ALL REAL data for season:', season);
        // Fetch Player Stats
        const [scorersRes, assistersRes, allPlayersRes] = await Promise.all([
          footballApi.getUCLTopScorers(season),
          footballApi.getUCLTopAssisters(season),
          footballApi.getAllPlayerStats(season)
        ]);
        // Fetch all teams
        const teamsRes = await footballApi.getUCLTeams(season);
        const teamsList = teamsRes.response || [];
        // Fetch stats for each team
        const teamStatsArr = await Promise.all(
          teamsList.map(async (teamObj) => {
            const teamId = teamObj.team.id;
            try {
              const statsRes = await footballApi.getUCLTeamStatsForTeam(teamId, season);
              return statsRes;
            } catch (e) {
              return null;
            }
          })
        );
        // Filter out failed fetches
        const validTeamStats = teamStatsArr.filter(Boolean);
        // Log for debugging
        console.log('All Team Stats:', validTeamStats);
        // Process Team Stats
        setTeamRatings(
          validTeamStats
            .map(teamStats => ({
              name: teamStats.team.name,
              logo: teamStats.team.logo,
              rating: teamStats.games?.rating || 0
            }))
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 10)
        );
        setGoalsPerMatch(
          validTeamStats
            .map(teamStats => {
              const goalsFor = teamStats.goals?.for?.total || 0;
              const matches = teamStats.games?.appearences || 1;
              return {
                name: teamStats.team.name,
                logo: teamStats.team.logo,
                value: (goalsFor / matches).toFixed(2)
              };
            })
            .sort((a, b) => b.value - a.value)
            .slice(0, 10)
        );
        setGoalsConcededPerMatch(
          validTeamStats
            .map(teamStats => {
              const goalsAgainst = teamStats.goals?.against?.total || 0;
              const matches = teamStats.games?.appearences || 1;
              return {
                name: teamStats.team.name,
                logo: teamStats.team.logo,
                value: (goalsAgainst / matches).toFixed(2)
              };
            })
            .sort((a, b) => a.value - b.value)
            .slice(0, 10)
        );
        setCleanSheets(
          validTeamStats
            .map(teamStats => ({
              name: teamStats.team.name,
              logo: teamStats.team.logo,
              value: teamStats.clean_sheets?.total || 0
            }))
            .sort((a, b) => b.value - a.value)
            .slice(0, 10)
        );
        // Fetch standings for average position
        const standingsRes = await footballApi.getUCLStandings(season);
        if (standingsRes.response && standingsRes.response[0]?.league?.standings?.[0]) {
          const standings = standingsRes.response[0].league.standings[0];
          setAveragePosition(
            standings
              .map(team => ({
                name: team.team.name,
                logo: team.team.logo,
                value: team.rank
              }))
              .slice(0, 10)
          );
        } else {
          setAveragePosition([]);
        }
        // Player stats (unchanged)
        setTopScorers(scorersRes.response && scorersRes.response.length > 0 ? scorersRes.response.slice(0, 10) : []);
        setTopAssisters(assistersRes.response && assistersRes.response.length > 0 ? assistersRes.response.slice(0, 10) : []);
        if (allPlayersRes.response && allPlayersRes.response.length > 0) {
          const playersWithGoalsAssists = allPlayersRes.response
            .map(player => {
              const stats = player.statistics?.[0];
              const goals = stats?.goals?.total || 0;
              const assists = stats?.goals?.assists || 0;
              return {
                ...player,
                goalsPlusAssists: goals + assists
              };
            })
            .filter(player => player.goalsPlusAssists > 0)
            .sort((a, b) => b.goalsPlusAssists - a.goalsPlusAssists)
            .slice(0, 10);
          setGoalsPlusAssists(playersWithGoalsAssists);
        } else {
          setGoalsPlusAssists([]);
        }
        setLoading(false);
      } catch (err) {
        console.error('❌ Error fetching REAL data:', err);
        setError('Failed to load real data from API. Please check your API key, quota, or try a different season.');
        setLoading(false);
      }
    };
    fetchAllData();
  }, [season]);

  return (
    <div className="App">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="title-section">
            <h1>UEFA Champions League</h1>
            <p className="subtitle">All-time stats & rankings</p>
          </div>
          <div className="controls-section">
            <div className="control-group">
              <label htmlFor="lang">{t('selectLanguage')}</label>
              <select
                id="lang"
                value={i18n.language}
                onChange={e => i18n.changeLanguage(e.target.value)}
                className="modern-select"
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <div className="control-group">
              <label htmlFor="season">{t('selectYear')}</label>
              <select
                id="season"
                value={season}
                onChange={e => setSeason(Number(e.target.value))}
                className="modern-select"
              >
                {seasons.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        {/* Team Stats Section */}
        <h2 className="ucl-section-title">Team stats</h2>
        <div className="ucl-card-grid">
          <StatCard 
            title="Team Rating" 
            items={teamRatings.map(team => ({
              name: team.name,
              club: team.name,
              logo: team.logo,
              value: (typeof team.value === 'number' ? team.value : team.rating)?.toFixed ? (team.value ?? team.rating).toFixed(2) : (team.value ?? team.rating)
            }))} 
            type="club" 
            showMore 
            loading={loading} 
            error={error} 
          />
          <StatCard 
            title="Goals per Match" 
            items={goalsPerMatch.map(team => ({
              name: team.name,
              club: team.name,
              logo: team.logo,
              value: (typeof team.value === 'number' ? team.value : team.rating)?.toFixed ? (team.value ?? team.rating).toFixed(2) : (team.value ?? team.rating)
            }))} 
            type="club" 
            showMore 
            loading={loading} 
            error={error} 
          />
          <StatCard 
            title="Goals Conceded per Match" 
            items={goalsConcededPerMatch.map(team => ({
              name: team.name,
              club: team.name,
              logo: team.logo,
              value: (typeof team.value === 'number' ? team.value : team.rating)?.toFixed ? (team.value ?? team.rating).toFixed(2) : (team.value ?? team.rating)
            }))} 
            type="club" 
            showMore 
            loading={loading} 
            error={error} 
          />
          <StatCard 
            title="Average Position" 
            items={averagePosition.map(team => ({
              name: team.name,
              club: team.name,
              logo: team.logo,
              value: (typeof team.value === 'number' ? team.value : team.rating)?.toFixed ? (team.value ?? team.rating).toFixed(2) : (team.value ?? team.rating)
            }))} 
            type="club" 
            showMore 
            loading={loading} 
            error={error} 
          />
          <StatCard 
            title="Clean Sheets" 
            items={cleanSheets.map(team => ({
              name: team.name,
              club: team.name,
              logo: team.logo,
              value: (typeof team.value === 'number' ? team.value : team.rating)?.toFixed ? (team.value ?? team.rating).toFixed(2) : (team.value ?? team.rating)
            }))} 
            type="club" 
            showMore 
            loading={loading} 
            error={error} 
          />
        </div>

        {/* Player Stats Section */}
        <h2 className="ucl-section-title">Player stats</h2>
        <div className="ucl-card-grid">
          <StatCard
            title="Top Goalscorers"
            items={topScorers.map(p => ({
              name: p.player?.name || 'Unknown Player',
              club: p.statistics?.[0]?.team?.name || 'Unknown Team',
              avatar: p.player?.photo || 'https://via.placeholder.com/40x40',
              value: p.statistics?.[0]?.goals?.total || 0
            }))}
            type="player"
            showMore
            loading={loading}
            error={error}
          />
          <StatCard
            title="Top Assisters"
            items={topAssisters.map(p => ({
              name: p.player?.name || 'Unknown Player',
              club: p.statistics?.[0]?.team?.name || 'Unknown Team',
              avatar: p.player?.photo || 'https://via.placeholder.com/40x40',
              value: p.statistics?.[0]?.goals?.assists || 0
            }))}
            type="player"
            showMore
            loading={loading}
            error={error}
          />
          <StatCard
            title="Goals + Assists"
            items={goalsPlusAssists.map(p => ({
              name: p.player?.name || 'Unknown Player',
              club: p.statistics?.[0]?.team?.name || 'Unknown Team',
              avatar: p.player?.photo || 'https://via.placeholder.com/40x40',
              value: p.goalsPlusAssists || 0
            }))}
            type="player"
            showMore
            loading={loading}
            error={error}
          />
          <StatCard
            title="Player Rating"
            items={goalsPlusAssists.map(p => ({
              name: p.player?.name || 'Unknown Player',
              club: p.statistics?.[0]?.team?.name || 'Unknown Team',
              avatar: p.player?.photo || 'https://via.placeholder.com/40x40',
              value: p.statistics?.[0]?.games?.rating || 0
            }))}
            type="player"
            showMore
            loading={loading}
            error={error}
          />
        </div>

        {/* Team of the Season Section */}
        <h2 className="ucl-section-title">Team of the Season</h2>
        <TeamOfTheSeason players={tots} />
      </main>
    </div>
  );
}

export default App;