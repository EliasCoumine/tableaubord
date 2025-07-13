import React, { useState, useEffect } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { seasons, customStats2025, teamOfTheSeason } from './data';

function StatCard({ title, items, type }) {
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
                <div className="ucl-card-name">{item.name || item.club}</div>
                <div className="ucl-card-sub">{item.club || item.country}</div>
              </div>
              <div className="ucl-card-value">{item.value || item.rating}</div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: 'center', padding: '20px' }}>No data available</div>
        )}
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

  const {
    playerStats,
    teamStats
  } = customStats2025;

  const tots = teamOfTheSeason[season];

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
        {/* Team Stats */}
        <h2 className="ucl-section-title">Team stats</h2>
        <div className="ucl-card-grid">
          <StatCard title="Team Rating" items={teamStats.ratings} type="club" />
          <StatCard title="Goals" items={teamStats.goalsPerMatch} type="club" />
          <StatCard title="Goals Conceded" items={teamStats.goalsConcededPerMatch} type="club" />
          <StatCard title="Average Possession" items={teamStats.averagePossession} type="club" />
          <StatCard title="Clean Sheets" items={teamStats.cleanSheets} type="club" />
        </div>

        {/* Player Stats */}
        <h2 className="ucl-section-title">Player stats</h2>
        <div className="ucl-card-grid">
          <StatCard title="Top Goalscorers" items={playerStats.topScorers} type="player" />
          <StatCard title="Top Assisters" items={playerStats.topAssists} type="player" />
          <StatCard title="Goals + Assists" items={playerStats.goalsPlusAssists} type="player" />
          <StatCard title="Player Rating" items={playerStats.ratings} type="player" />
        </div>

        {/* Team of the Season */}
        <h2 className="ucl-section-title">Team of the Season</h2>
        <TeamOfTheSeason players={tots} />
      </main>
    </div>
  );
}

export default App;