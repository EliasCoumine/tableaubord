// PlayerAnalytics.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

import { playerDatabase } from './data';      // unified player DB
import './PlayerAnalytics.css';               // page-specific styles

function PlayerAnalytics({ onBack }) {
  const { t, i18n } = useTranslation();
  const [season, setSeason] = useState(2025);

  /* ───────────── map DB → chart points ───────────── */
  const scatterData = (playerDatabase[season] || []).map((p) => ({
    name: p.name,
    club: p.club,
    goalsPlusAssists: p.goalsPlusAssists,
    rating: p.rating, // Changed from playerRating to rating to match YAxis dataKey
  }));

  // Debug: log the data to see what we're working with
  console.log('Season:', season);
  console.log('Player Database:', playerDatabase[season]);
  console.log('Scatter Data:', scatterData);

  /* colour code by performance tier */
  const colorByPerf = (gpa, rating) => {
    if (gpa >= 15 && rating >= 8)   return '#22c55e'; // green
    if (gpa >= 10 || rating >= 7.5) return '#3b82f6'; // blue
    if (gpa >=  5 || rating >= 7)   return '#f59e0b'; // orange
    return '#ef4444';                                // red
  };

  /* custom dark tooltip */
  const renderTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const { name, club, goalsPlusAssists, rating } = payload[0].payload;
    return (
      <div className="recharts-tooltip-dark">
        <strong>{name}</strong>&nbsp;(<em>{club}</em>)
        <br />
        {t('goalsPlusAssists')}:&nbsp;<b>{goalsPlusAssists}</b>,&nbsp;
        {t('playerRating')}:&nbsp;<b>{rating.toFixed(2)}</b>
      </div>
    );
  };

  /* ────────────────── UI ────────────────── */
  return (
    <div className="player-analytics">
      {/* -------- sticky header -------- */}
      <header className="analytics-header">
        <div className="header-content">
          <div className="title-section">
            <h1>{t('playerAnalytics')}</h1>
            <p className="subtitle">{t('performanceCorrelation')}</p>
          </div>

          <div className="controls-section">
            <button className="back-button" onClick={onBack}>
              ← {t('backToDashboard')}
            </button>

            {/* language switch */}
            <div className="control-group">
              <label htmlFor="lang">{t('selectLanguage')}</label>
              <select
                id="lang"
                className="modern-select"
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
              >
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>

            {/* season switch */}
            <div className="control-group">
              <label htmlFor="season">{t('selectYear')}</label>
              <select
                id="season"
                className="modern-select"
                value={season}
                onChange={(e) => setSeason(Number(e.target.value))}
              >
                <option value={2025}>2024/2025</option>
                <option value={2024}>2023/2024</option>
                <option value={2023}>2022/2023</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      {/* -------- scatter plot -------- */}
      <main className="analytics-content">
        <div className="chart-container large">
          <ResponsiveContainer width="100%" height={520}>
            <ScatterChart margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a2a6c" />

              <XAxis 
                type="number" 
                dataKey="goalsPlusAssists" 
                name={t('goalsPlusAssists')}
                stroke="#b3c7f7" 
                fontSize={12}
                label={{ value: t('goalsPlusAssists'), position: 'bottom', offset: 0 }}
                domain={[0, 'dataMax + 2']}
              />
              <YAxis 
                type="number" 
                dataKey="rating" 
                name={t('playerRating')}
                stroke="#b3c7f7" 
                fontSize={12}
                label={{ value: t('playerRating'), angle: -90, position: 'left' }}
                domain={[6.5, 8.5]}
              />

              <Tooltip content={renderTooltip} cursor={{ stroke: '#ffffff30' }} />

              <Scatter data={scatterData}>
                {scatterData.map((pt, i) => (
                  <Cell
                    key={i}
                    fill={colorByPerf(pt.goalsPlusAssists, pt.rating)}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>

          {/* -------- custom legend -------- */}
          <div className="chart-legend">
            <div className="legend-item">
              <span className="legend-color green" /> {t('highPerformance')}
            </div>
            <div className="legend-item">
              <span className="legend-color blue" />  {t('goodPerformance')}
            </div>
            <div className="legend-item">
              <span className="legend-color orange" /> {t('averagePerformance')}
            </div>
            <div className="legend-item">
              <span className="legend-color red" />   {t('belowAverage')}
            </div>
          </div>
        </div>

        {/* -------- insight + summary (unchanged) -------- */}
        <div className="stats-summary">
          <div className="summary-card">
            <h4>{t('correlationInsights')}</h4>
            <ul>
              <li>{t('insight1')}</li>
              <li>{t('insight2')}</li>
              <li>{t('insight3')}</li>
            </ul>
          </div>

          <div className="summary-card">
            <h4>{t('dataSummary')}</h4>
            <ul>
              <li>{t('totalPlayers')}: <b>{scatterData.length}</b></li>
              <li>
                {t('avgGoalsPlusAssists')}:&nbsp;
                <b>
                  {(
                    scatterData.reduce((s, p) => s + p.goalsPlusAssists, 0) /
                    scatterData.length
                  ).toFixed(1)}
                </b>
              </li>
              <li>
                {t('avgRating')}:&nbsp;
                <b>
                  {(
                    scatterData.reduce((s, p) => s + p.rating, 0) /
                    scatterData.length
                  ).toFixed(2)}
                </b>
              </li>
              <li>
                {t('topPerformer')}:&nbsp;
                <b>
                  {
                    [...scatterData].sort(
                      (a, b) =>
                        b.goalsPlusAssists + b.rating -
                        (a.goalsPlusAssists + a.rating)
                    )[0].name
                  }
                </b>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PlayerAnalytics;