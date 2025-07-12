import React, { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { seasons, clubStats, playerStats, teamOfTheSeason } from './data';

function StatCard({ title, items, type, showMore }) {
  return (
    <div className="ucl-card">
      <div className="ucl-card-header">{title}</div>
      <div className="ucl-card-body">
        {items.map((item, idx) => (
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
        ))}
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
        {/* Club Stats Section */}
        <h2 className="ucl-section-title">Club stats</h2>
        <div className="ucl-card-grid">
          <StatCard title="Most titles" items={club.mostTitles} type="club" showMore />
          <StatCard title="Most appearances" items={club.mostAppearances} type="club" showMore />
          <StatCard title="Matches played" items={club.matchesPlayed} type="club" showMore />
        </div>
        {/* Player Stats Section */}
        <h2 className="ucl-section-title">Player stats</h2>
        <div className="ucl-card-grid">
          <StatCard title="Top goalscorers" items={player.topGoalscorers} type="player" showMore />
          <StatCard title="Matches played" items={player.matchesPlayed} type="player" showMore />
          <StatCard title="Most assists" items={player.mostAssists} type="player" showMore />
        </div>
        {/* Team of the Season Section */}
        <h2 className="ucl-section-title">Team of the Season</h2>
        <TeamOfTheSeason players={tots} />
      </main>
    </div>
  );
}

export default App;
