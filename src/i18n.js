import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      /* ───────── dashboard generic ───────── */
      title: 'UCL Dashboard',
      description: 'Champions League Statistics & Analytics',
      selectLanguage: 'Language',
      selectYear: 'Season',
      dashboard: 'Dashboard',
      backToDashboard: 'Back to Dashboard',

      /* ───────── cards / filters ───────── */
      topScorers: 'Top Scorers',
      topAssists: 'Top Assists',
      teamGoals: 'Team Performance',
      loading: 'Loading Champions League data…',
      error: 'Failed to load data',

      /* ───────── team stats ───────── */
      teamStats: 'Team Statistics',
      teamRating: 'Team Ratings',
      goals: 'Goals Scored',
      goalsConceded: 'Goals Conceded',
      averagePossession: 'Average Possession',
      cleanSheets: 'Clean Sheets',

      /* ───────── player stats ───────── */
      playerStats: 'Player Statistics',
      goalsPlusAssists: 'Goals + Assists',
      playerRating: 'Player Ratings',

      /* ───────── team of the season ───────── */
      teamOfTheSeason: 'Team of the Season',

      /* ───────── knockout bracket ───────── */
      knockoutBracket: 'Knockout Bracket',
      championsLeague: 'Champions League',
      knockoutStage: 'Knockout Stage',
      roundOf16: 'Round of 16',
      quarterFinals: 'Quarter Finals',
      semiFinals: 'Semi Finals',
      final: 'Final',
      champion: 'CHAMPION',

      /* ───────── axis labels – NEW ───────── */
      goalsAssistsVsRating: 'Goals + Assists vs Player Rating',

      /* ───────── analytics page ───────── */
      playerAnalytics: 'Player Analytics',
      performanceCorrelation: 'Performance Correlation Analysis',
      scatterDescription:
        'This scatter plot shows the correlation between player performance (Goals + Assists) and their rating. Each point represents a player, with colour coding indicating performance levels.',

      highPerformance:  'High Performance',
      goodPerformance:  'Good Performance',
      averagePerformance:'Average Performance',
      belowAverage:     'Below Average',

      correlationInsights: 'Correlation Insights',
      insight1: 'Players with high goals + assists tend to have higher ratings.',
      insight2: 'There is a positive correlation between offensive output and overall rating.',
      insight3: 'Top performers are concentrated in the upper-right quadrant.',

      dataSummary:            'Data Summary',
      totalPlayers:           'Total Players',
      avgGoalsPlusAssists:    'Average Goals + Assists',
      avgRating:              'Average Rating',
      topPerformer:           'Top Performer',
    },
  },

  fr: {
    translation: {
      /* ───────── tableau de bord ───────── */
      title: 'Tableau UCL',
      description: 'Statistiques & analyses de la Ligue des champions',
      selectLanguage: 'Langue',
      selectYear: 'Saison',
      dashboard: 'Tableau de bord',
      backToDashboard: 'Retour',

      /* ───────── cartes / filtres ───────── */
      topScorers:  'Meilleurs buteurs',
      topAssists:  'Meilleurs passeurs',
      teamGoals:   'Performance équipes',
      loading:     'Chargement des données…',
      error:       'Échec du chargement',

      /* ───────── statistiques équipes ───────── */
      teamStats: 'Statistiques des équipes',
      teamRating: 'Notes des équipes',
      goals: 'Buts marqués',
      goalsConceded: 'Buts encaissés',
      averagePossession: 'Possession moyenne',
      cleanSheets: 'Clean sheets',

      /* ───────── statistiques joueurs ───────── */
      playerStats: 'Statistiques des joueurs',
      goalsPlusAssists: 'Buts + Passes',
      playerRating: 'Notes des Joueurs',

      /* ───────── équipe de la saison ───────── */
      teamOfTheSeason: 'Équipe de la saison',

      /* ───────── tableau de qualification ───────── */
      knockoutBracket: 'Tableau de qualification',
      championsLeague: 'Ligue des champions',
      knockoutStage: 'Phase à élimination',
      roundOf16: 'Phase de 16',
      quarterFinals: 'Quarts de finale',
      semiFinals: 'Demi-finales',
      final: 'Finale',
      champion: 'CHAMPION',

      /* ───────── étiquettes d'axes – NOUVEAU ───────── */
      goalsAssistsVsRating: 'Buts + Passes vs Note des Joueurs',

      /* ───────── page analytique ───────── */
      playerAnalytics:        'Analyse des joueurs',
      performanceCorrelation: 'Analyse de corrélation des performances',
      scatterDescription:
        'Ce nuage de points montre la corrélation entre la performance d\'un joueur (Buts + Passes) et sa note. Chaque point représente un joueur, avec un code couleur selon le niveau de performance.',

      highPerformance:   'Performance élevée',
      goodPerformance:   'Bonne performance',
      averagePerformance:'Performance moyenne',
      belowAverage:      'Sous la moyenne',

      correlationInsights: 'Informations de corrélation',
      insight1: 'Les joueurs avec beaucoup de buts + passes ont tendance à avoir une note plus élevée.',
      insight2: 'Il existe une corrélation positive entre production offensive et note globale.',
      insight3: 'Les meilleurs se trouvent dans le quadrant supérieur-droit.',

      dataSummary:            'Résumé des données',
      totalPlayers:           'Total de joueurs',
      avgGoalsPlusAssists:    'Moyenne Buts + Passes',
      avgRating:              'Note moyenne',
      topPerformer:           'Meilleur joueur',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;