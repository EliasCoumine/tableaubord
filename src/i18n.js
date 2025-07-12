import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: 'UCL Dashboard',
      description: 'Champions League Statistics & Analytics',
      selectLanguage: 'Language',
      selectYear: 'Season',
      topScorers: 'Top Scorers',
      topAssists: 'Top Assists',
      teamGoals: 'Team Performance',
      loading: 'Loading Champions League data...',
      error: 'Failed to load data',
      goals: 'Goals',
      assists: 'Assists',
      goalsFor: 'Goals For',
      goalsAgainst: 'Goals Against',
    },
  },
  fr: {
    translation: {
      title: 'Tableau UCL',
      description: 'Statistiques & Analyses de la Ligue des Champions',
      selectLanguage: 'Langue',
      selectYear: 'Saison',
      topScorers: 'Meilleurs Buteurs',
      topAssists: 'Meilleurs Passeurs',
      teamGoals: 'Performance Équipes',
      loading: 'Chargement des données UCL...',
      error: 'Échec du chargement',
      goals: 'Buts',
      assists: 'Passes',
      goalsFor: 'Buts Marqués',
      goalsAgainst: 'Buts Encaissés',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 