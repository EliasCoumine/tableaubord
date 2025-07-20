import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { customStats2024, customStats2025 } from './data';

function ClubPerformanceChart({ season }) {
  const { t } = useTranslation();

  // Get the right stats for the selected season
  const stats = season === 2025 ? customStats2025.teamStats : customStats2024.teamStats;

  // Get top 4 clubs by rating, but for 2025 always include Bayern München and exclude Liverpool
  let top4;
  if (season === 2025) {
    // Get top 3 clubs by rating excluding Liverpool and Bayern
    const filtered = stats.ratings.filter(c => c.name !== 'Liverpool' && c.name !== 'Bayern München')
      .sort((a, b) => b.value - a.value)
      .slice(0, 3)
      .map(club => club.name);
    // Always include Bayern München
    top4 = ['Bayern München', ...filtered];
  } else {
    top4 = [...stats.ratings]
      .sort((a, b) => b.value - a.value)
      .slice(0, 4)
      .map(club => club.name);
  }

  // Helper to get goals scored and conceded for a club
  const getStat = (arr, name) => arr.find(c => c.name === name)?.value || 0;

  // Prepare data for the chart
  const chartData = top4.map(name => ({
    club: name,
    goals: getStat(stats.goalsPerMatch, name),
    conceded: getStat(stats.goalsConcededPerMatch, name),
  }));

  // Custom tooltip for bilingual support
  const renderTooltip = ({ active, payload }) => {
    if (!active || !payload?.length) return null;
    const d = payload[0].payload;
    return (
      <div className="recharts-tooltip-dark">
        <strong>{d.club}</strong><br />
        {t('goals')}: <b>{d.goals}</b><br />
        {t('goalsConceded')}: <b>{d.conceded}</b>
      </div>
    );
  };

  // Custom legend below the chart
  const renderCustomLegend = () => (
    <div className="chart-legend">
      <div className="legend-item">
        <span className="legend-color green" /> {t('goals')}
      </div>
      <div className="legend-item">
        <span className="legend-color red" /> {t('goalsConceded')}
      </div>
    </div>
  );

  // Calculate summary stats
  const totalClubs = chartData.length;
  const avgGoals = (chartData.reduce((s, c) => s + c.goals, 0) / totalClubs).toFixed(1);
  const avgConceded = (chartData.reduce((s, c) => s + c.conceded, 0) / totalClubs).toFixed(1);
  const highestScoring = chartData.sort((a, b) => b.goals - a.goals)[0]?.club || '';
  const leastConceded = chartData.sort((a, b) => a.conceded - b.conceded)[0]?.club || '';
  const bestRatioClub = chartData
    .map(c => ({ ...c, ratio: c.goals / (c.conceded || 1) }))
    .sort((a, b) => b.ratio - a.ratio)[0]?.club || '';

  return (
    <div className="club-performance-chart">
      <div className="chart-header">
        <h3>{t('clubPerformance')}</h3>
        <p className="chart-description">{t('clubPerformanceDescription')}</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 40 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#1a2a6c" />
          <XAxis dataKey="club" stroke="#fff" fontSize={12} label={{ value: t('club'), position: 'bottom', offset: 0, fill: '#fff' }} />
          <YAxis stroke="#fff" fontSize={12} label={{ value: t('goalsVsConceded'), angle: -90, position: 'left', fill: '#fff' }} />
          <Tooltip content={renderTooltip} cursor={{ stroke: '#ffffff30' }} />
          <Bar dataKey="goals" fill="#22c55e" name={t('goals')} />
          <Bar dataKey="conceded" fill="#ef4444" name={t('goalsConceded')} />
        </BarChart>
      </ResponsiveContainer>
      {renderCustomLegend()}

      {/* Correlation Insights and Data Summary */}
      <div className="stats-summary" style={{ marginTop: '2.5rem' }}>
        <div className="summary-card">
          <h4>{t('correlationInsights')}</h4>
          <ul>
            <li>{t('clubInsightBestRatio')}</li>
            <li>{t('clubInsight2')}</li>
            <li>{t('clubInsight3')}</li>
          </ul>
        </div>
        <div className="summary-card">
          <h4>{t('dataSummary')}</h4>
          <ul>
            <li>{t('totalClubs')}: <b>{totalClubs}</b></li>
            <li>{t('highestScoring')}: <b>{highestScoring}</b></li>
            <li>{t('leastConceded')}: <b>{leastConceded}</b></li>
            <li>{t('bestRatioClub')}: <b>{bestRatioClub}</b></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClubPerformanceChart; 