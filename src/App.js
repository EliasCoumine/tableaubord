import React, { useState } from 'react';
import './App.css';
import './i18n';
import { useTranslation } from 'react-i18next';
import { seasons, customStats2025, teamOfTheSeason, customStats2024, playerDatabase } from './data';
import PlayerAnalytics from './PlayerAnalytics';

function StatCard({ title, items, type, showAll, toggleShowAll }) {
  const displayCount = showAll ? 10 : 3;
  const hasMore = items && items.length > 3;
  const shownItems = items ? items.slice(0, displayCount) : [];

  return (
    <div className="ucl-card">
      <div className="ucl-card-header">{title}</div>
      <div className="ucl-card-body">
        {shownItems && shownItems.length > 0 ? (
          shownItems.map((item, idx) => (
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
        {hasMore && (
          <button className="show-more-btn" onClick={toggleShowAll}>
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
}

function TeamOfTheSeason({ players }) {
  // Group players by position
  const gk = players.filter(p => p.position === 'GK');
  const defenders = players.filter(p => p.position?.startsWith('CB') || p.position?.startsWith('RB') || p.position?.startsWith('LB'));
  const midfielders = players.filter(p => p.position === 'CM');
  const forwards = players.filter(p => p.position?.startsWith('ST') || p.position?.startsWith('RW') || p.position?.startsWith('LW'));

  return (
    <div className="ucl-card wide">
      <div className="ucl-card-header">Team of the Season</div>
      <div className="ucl-tots-grid">
        {/* Forwards (top) */}
        <div className="ucl-tots-row fwd">
          {forwards.map((p, idx) => (
            <div className="ucl-tots-player" key={idx}>
              <div className="ucl-tots-position">{p.position}</div>
              <img className="ucl-tots-avatar" src={p.avatar} alt={p.name} />
              <div className="ucl-tots-name">{p.name}</div>
              <img className="ucl-tots-logo" src={p.logo} alt={p.club} />
              <div className="ucl-tots-rating">{p.rating}</div>
            </div>
          ))}
        </div>

        {/* Midfielders */}
        <div className="ucl-tots-row mid">
          {midfielders.map((p, idx) => (
            <div className="ucl-tots-player" key={idx}>
              <div className="ucl-tots-position">{p.position}</div>
              <img className="ucl-tots-avatar" src={p.avatar} alt={p.name} />
              <div className="ucl-tots-name">{p.name}</div>
              <img className="ucl-tots-logo" src={p.logo} alt={p.club} />
              <div className="ucl-tots-rating">{p.rating}</div>
            </div>
          ))}
        </div>

        {/* Defenders */}
        <div className="ucl-tots-row def">
          {defenders.map((p, idx) => (
            <div className="ucl-tots-player" key={idx}>
              <div className="ucl-tots-position">{p.position}</div>
              <img className="ucl-tots-avatar" src={p.avatar} alt={p.name} />
              <div className="ucl-tots-name">{p.name}</div>
              <img className="ucl-tots-logo" src={p.logo} alt={p.club} />
              <div className="ucl-tots-rating">{p.rating}</div>
            </div>
          ))}
        </div>

        {/* Goalkeeper (bottom) */}
        <div className="ucl-tots-row gk">
          {gk.map((p, idx) => (
            <div className="ucl-tots-player" key={idx}>
              <div className="ucl-tots-position">{p.position}</div>
              <img className="ucl-tots-avatar" src={p.avatar} alt={p.name} />
              <div className="ucl-tots-name">{p.name}</div>
              <img className="ucl-tots-logo" src={p.logo} alt={p.club} />
              <div className="ucl-tots-rating">{p.rating}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  const { t, i18n } = useTranslation();
  const [season, setSeason] = useState(2025);
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard' or 'analytics'
  // Track showAll state per StatCard by title
  const [showAllMap, setShowAllMap] = useState({});

  const getCurrentStats = () => {
    switch(season) {
      case 2025:
        return customStats2025;
      case 2024:
        return customStats2024;
      default:
        return customStats2025;
    }
  };

  const currentStats = getCurrentStats();
  const tots = teamOfTheSeason[season];

  // Helper to toggle showAll for a given card title
  const handleToggleShowAll = (title) => {
    setShowAllMap(prev => ({ ...prev, [title]: !prev[title] }));
  };

  // If we're on the analytics page, render that component
  if (currentPage === 'analytics') {
    return <PlayerAnalytics onBack={() => setCurrentPage('dashboard')} />;
  }

  return (
    <div className="App">
      <header className="dashboard-header">
        <div className="header-content">
          <div className="title-section">
            <h1>{t('title')}</h1>
            <p className="subtitle">{t('description')}</p>
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
        
        {/* Navigation */}
        <nav className="dashboard-nav">
          <div className="nav-content">
            <button 
              className={`nav-button ${currentPage === 'dashboard' ? 'active' : ''}`}
              onClick={() => setCurrentPage('dashboard')}
            >
              {t('dashboard')}
            </button>
            <button 
              className={`nav-button ${currentPage === 'analytics' ? 'active' : ''}`}
              onClick={() => setCurrentPage('analytics')}
            >
              {t('playerAnalytics')}
            </button>
          </div>
        </nav>
      </header>

      <main className="dashboard-content">
        {/* Team Stats */}
        <h2 className="ucl-section-title">{t('teamStats')}</h2>
        <div className="ucl-card-grid">
          {currentStats.teamStats ? (
            <>
              <StatCard title={t('teamRating')} items={currentStats.teamStats.ratings} type="club" showAll={!!showAllMap[t('teamRating')]} toggleShowAll={() => handleToggleShowAll(t('teamRating'))} />
              <StatCard title={t('goals')} items={currentStats.teamStats.goalsPerMatch} type="club" showAll={!!showAllMap[t('goals')]} toggleShowAll={() => handleToggleShowAll(t('goals'))} />
              <StatCard title={t('goalsConceded')} items={currentStats.teamStats.goalsConcededPerMatch} type="club" showAll={!!showAllMap[t('goalsConceded')]} toggleShowAll={() => handleToggleShowAll(t('goalsConceded'))} />
              <StatCard title={t('averagePossession')} items={currentStats.teamStats.averagePossession} type="club" showAll={!!showAllMap[t('averagePossession')]} toggleShowAll={() => handleToggleShowAll(t('averagePossession'))} />
            </>
          ) : (
            <StatCard title={t('teamStats')} items={[]} type="club" showAll={false} toggleShowAll={() => {}} />
          )}
        </div>

        {/* Player Stats */}
        <h2 className="ucl-section-title">{t('playerStats')}</h2>
        <div className="ucl-card-grid">
          <StatCard title={t('topScorers')} items={currentStats.playerStats?.topScorers || currentStats.topScorers} type="player" showAll={!!showAllMap[t('topScorers')]} toggleShowAll={() => handleToggleShowAll(t('topScorers'))} />
          <StatCard title={t('topAssists')} items={currentStats.playerStats?.topAssists || currentStats.topAssists} type="player" showAll={!!showAllMap[t('topAssists')]} toggleShowAll={() => handleToggleShowAll(t('topAssists'))} />
          <StatCard title={t('goalsPlusAssists')} items={currentStats.playerStats?.goalsPlusAssists || currentStats.goalsPlusAssists} type="player" showAll={!!showAllMap[t('goalsPlusAssists')]} toggleShowAll={() => handleToggleShowAll(t('goalsPlusAssists'))} />
          <StatCard title={t('playerRating')} items={currentStats.playerStats?.playerRatings || currentStats.playerRatings || []} type="player" showAll={!!showAllMap[t('playerRating')]} toggleShowAll={() => handleToggleShowAll(t('playerRating'))} />
        </div>

        {/* Team of the Season */}
        <h2 className="ucl-section-title">{t('teamOfTheSeason')}</h2>
        <TeamOfTheSeason players={tots} />
      </main>
    </div>
  );
}

export default App;