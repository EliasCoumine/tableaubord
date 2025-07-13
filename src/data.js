// Mock data for UCL Dashboard

export const seasons = [
  { label: '2024/2025', value: 2025 },
  { label: '2023/2024', value: 2024 },
  { label: '2022/2023', value: 2023 },
];

export const clubStats = {
  2025: {
    mostTitles: [
      { club: 'Real Madrid', country: 'ESP', value: 15, logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
      { club: 'Milan', country: 'ITA', value: 7, logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg' },
      { club: 'Liverpool', country: 'ENG', value: 6, logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
      { club: 'Bayern München', country: 'GER', value: 6, logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
      { club: 'Barcelona', country: 'ESP', value: 5, logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
      { club: 'Ajax', country: 'NED', value: 4, logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg' },
    ],
    mostAppearances: [
      { club: 'Real Madrid', country: 'ESP', value: 44, logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
      { club: 'Benfica', country: 'POR', value: 42, logo: 'https://upload.wikimedia.org/wikipedia/en/8/89/SL_Benfica_logo.svg' },
      { club: 'Ajax', country: 'NED', value: 36, logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Ajax_Amsterdam.svg' },
      { club: 'Dynamo Kyiv', country: 'UKR', value: 35, logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/FC_Dynamo_Kyiv_logo.svg' },
      { club: 'Bayern München', country: 'GER', value: 34, logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
      { club: 'Juventus', country: 'ITA', value: 33, logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg' },
    ],
    matchesPlayed: [
      { club: 'Real Madrid', country: 'ESP', value: 503, logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
      { club: 'Bayern München', country: 'GER', value: 408, logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
      { club: 'Barcelona', country: 'ESP', value: 363, logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
      { club: 'Juventus', country: 'ITA', value: 311, logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg' },
      { club: 'Benfica', country: 'POR', value: 304, logo: 'https://upload.wikimedia.org/wikipedia/en/8/89/SL_Benfica_logo.svg' },
      { club: 'Man Utd', country: 'ENG', value: 299, logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
    ],
  },
  2024: { /* ...similar mock data for 2023/24... */ },
  2023: { /* ...similar mock data for 2022/23... */ },
};

export const playerStats = {
  2025: {
    topGoalscorers: [
      { name: 'Ronaldo', club: 'Man Utd', value: 141, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
      { name: 'Messi', club: 'Paris', value: 129, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
      { name: 'Lewandowski', club: 'Barcelona', value: 105, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
      { name: 'Benzema', club: 'Real Madrid', value: 90, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
      { name: 'Raúl González', club: 'Schalke', value: 71, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6c/FC_Schalke_04_logo.svg' },
      { name: 'Van Nistelrooy', club: 'Real Madrid', value: 60, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    ],
    matchesPlayed: [
      { name: 'Ronaldo', club: 'Man Utd', value: 187, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
      { name: 'Casillas', club: 'Porto', value: 181, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/FC_Porto.svg' },
      { name: 'Müller', club: 'Bayern München', value: 165, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
      { name: 'Messi', club: 'Paris', value: 163, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
      { name: 'Xavi Hernández', club: 'Barcelona', value: 157, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
      { name: 'Modrić', club: 'Real Madrid', value: 153, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    ],
    mostAssists: [
      { name: 'Ronaldo', club: 'Man Utd', value: 42, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
      { name: 'Di María', club: 'Benfica', value: 41, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/8/89/SL_Benfica_logo.svg' },
      { name: 'Messi', club: 'Paris', value: 40, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
      { name: 'Neymar', club: 'Paris', value: 33, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
      { name: 'Giggs', club: 'Man Utd', value: 31, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg' },
      { name: 'Xavi Hernández', club: 'Barcelona', value: 30, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    ],
  },
  2024: { /* ...similar mock data for 2023/24... */ },
  2023: { /* ...similar mock data for 2022/23... */ },
};

export const teamOfTheSeason = {
  2025: [
    { name: 'Kane', club: 'Bayern München', rating: 7.9, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg' },
    { name: 'Dembélé', club: 'Paris', rating: 7.9, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
    { name: 'Raphinha', club: 'Barcelona', rating: 8.3, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { name: 'Mac Allister', club: 'Liverpool', rating: 7.6, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
    { name: 'Bellingham', club: 'Real Madrid', rating: 7.6, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg' },
    { name: 'Yamal', club: 'Barcelona', rating: 7.9, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg' },
    { name: 'Mendes', club: 'Paris', rating: 7.7, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
    { name: 'van Dijk', club: 'Liverpool', rating: 7.3, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg' },
    { name: 'Ribeiro', club: 'Lille', rating: 7.3, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/LOSC_Lille_logo.svg' },
    { name: 'Hakimi', club: 'Paris', rating: 7.9, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Paris_Saint-Germain_F.C..svg' },
    { name: 'Raya', club: 'Arsenal', rating: 7.6, avatar: 'https://img.uefa.com/imgml/TP/players/3/2024/324/250005324.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg' },
  ],
  2024: [ /* ...similar mock data for 2023/24... */ ],
  2023: [ /* ...similar mock data for 2022/23... */ ],
};

export const customStats2025 = {
  playerStats: {
    topScorers: [
      { name: 'Raphinha', club: 'Barcelona', value: 13, avatar: '', logo: '' },
      { name: 'Serhou Guirassy', club: 'Borussia Dortmund', value: 13, avatar: '', logo: '' },
      { name: 'Robert Lewandowski', club: 'Barcelona', value: 11, avatar: '', logo: '' },
      { name: 'Ousmane Dembélé', club: 'Paris Saint-Germain', value: 8, avatar: '', logo: '' },
      { name: 'Vinicius Junior', club: 'Barcelona', value: 9, avatar: '', logo: '' },
      { name: 'Harry Kane', club: 'Bayern München', value: 9, avatar: '', logo: '' },
      { name: 'Kylian Mbappe', club: 'Real Madrid', value: 7, avatar: '', logo: '' },
      { name: 'Lautaro Martinez', club: 'Inter Milan', value: 11, avatar: '', logo: '' },
      { name: 'Julian Alvarez', club: 'Liverpool', value: 7, avatar: '', logo: '' },
      { name: 'Erling Haaland', club: 'Manchester City', value: 8, avatar: '', logo: '' },

    ],
    topAssists: [
    { name: 'Raphinha', club: 'Barcelona', value: 8, avatar: '', logo: '' },
    { name: 'Ousmane Dembélé', club: 'Paris Saint-Germain', value: 6, avatar: '', logo: '' },
    { name: 'Achraf Hakimi', club: 'Paris Saint-Germain', value: 5, avatar: '', logo: '' },
    { name: 'Julian Brandt', club: 'Borussia Dortmund', value: 5, avatar: '', logo: '' },
    { name: 'Joshua Kimmich', club: 'Bayern München', value: 4, avatar: '', logo: '' },
    { name: 'Bradley Barcola', club: 'Paris Saint-Germain', value: 4, avatar: '', logo: '' },
    { name: 'Mohamed Salah', club: 'Liverpool', value: 4, avatar: '', logo: '' },
    { name: 'Serhou Guirassy', club: 'Borussia Dortmund', value: 4, avatar: '', logo: '' },
    { name: 'Marcos Llorente', club: 'Atlético Madrid', value: 4, avatar: '', logo: '' },
    { name: 'Fabián Ruiz', club: 'Paris Saint-Germain', value: 4, avatar: '', logo: '' },
  ],
    goalsPlusAssists: [
    { name: 'Raphinha', club: 'Barcelona', value: 21, avatar: '', logo: '' },
    { name: 'Serhou Guirassy', club: 'Borussia Dortmund', value: 17, avatar: '', logo: '' },
    { name: 'Ousmane Dembélé', club: 'Paris Saint-Germain', value: 14, avatar: '', logo: '' },
    { name: 'Harry Kane', club: 'Bayern München', value: 13, avatar: '', logo: '' },
    { name: 'Robert Lewandowski', club: 'Barcelona', value: 11, avatar: '', logo: '' },
    { name: 'Vinicius Junior', club: 'Real Madrid', value: 10, avatar: '', logo: '' },
    { name: 'Achraf Hakimi', club: 'Paris Saint-Germain', value: 9, avatar: '', logo: '' },
    { name: 'Lautaro Martinez', club: 'Inter Milan', value: 9, avatar: '', logo: '' },
    { name: 'Jonathan David', club: 'Lille', value: 9, avatar: '', logo: '' },
    { name: 'Kylian Mbappé', club: 'Real Madrid', value: 8, avatar: '', logo: '' },
    ],

  playerRatings: [
    { name: 'Raphinha', club: 'Barcelona', value: 8.31, avatar: '', logo: '' },
    { name: 'Lamine Yamal', club: 'Barcelona', value: 7.92, avatar: '', logo: '' },
    { name: 'Ousmane Dembélé', club: 'Paris Saint-Germain', value: 7.89, avatar: '', logo: '' },
    { name: 'Achraf Hakimi', club: 'Paris Saint-Germain', value: 7.87, avatar: '', logo: '' },
    { name: 'Harry Kane', club: 'Bayern München', value: 7.87, avatar: '', logo: '' },
    { name: 'Antoine Griezmann', club: 'Atletico Madrid', value: 7.85, avatar: '', logo: '' },
    { name: 'Serhou Guirassy', club: 'Borussia Dortmund', value: 7.80, avatar: '', logo: '' },
    { name: 'Vinicius Junior', club: 'Real Madrid', value: 7.78, avatar: '', logo: '' },
    { name: 'Nuno Mendes', club: 'Paris Saint-Germain', value: 7.72, avatar: '', logo: '' },
    { name: 'Mohamed Salah', club: 'Liverpool', value: 7.63, avatar: '', logo: '' },
  ]
  },
  teamStats: {
    ratings: [
      { name: 'Paris Saint-Germain', value: 7.29, logo: '' },
      { name: 'Real Madrid', value: 7.13, logo: '' },
      { name: 'Liverpool', value: 7.13, logo: '' },
      { name: 'Barcelona', value: 7.11, logo: '' },
      { name: 'Bayern München', value: 7.10, logo: '' },
      { name: 'Arsenal', value: 7.03, logo: '' },
      { name: 'Borussia Dortmund', value: 7.02, logo: '' },
      { name: 'Inter', value: 7.00, logo: '' },
      { name: 'AC Milan', value: 6.93, logo: '' },
      { name: 'Manchester City', value: 6.87, logo: '' }
    ],
    goalsPerMatch: [
      { name: 'Barcelona', value: 43, logo: '' },
      { name: 'Paris Saint-Germain', value: 38, logo: '' },
      { name: 'Bayern München', value: 31, logo: '' },
      { name: 'Arsenal', value: 31, logo: '' },
      { name: 'Borussia Dortmund', value: 31, logo: '' },
      { name: 'Real Madrid', value: 29, logo: '' },
      { name: 'Inter', value: 26, logo: '' },
      { name: 'Manchester City', value: 21, logo: '' },
      { name: 'Liverpool', value: 18, logo: '' },
      { name: 'AC Milan', value: 15, logo: '' }

    ],
    goalsConcededPerMatch: [
      { name: 'Barcelona', value: 24, logo: '' },
      { name: 'Paris Saint-Germain', value: 15, logo: '' },
      { name: 'Bayern München', value: 18, logo: '' },
      { name: 'Arsenal', value: 10, logo: '' },
      { name: 'Borussia Dortmund', value: 19, logo: '' },
      { name: 'Real Madrid', value: 22, logo: '' },
      { name: 'Inter', value: 16, logo: '' },
      { name: 'Manchester City', value: 20, logo: '' },
      { name: 'Liverpool', value: 6, logo: '' },
      { name: 'AC Milan', value: 13, logo: '' }
    ],
    averagePossession: [
      { name: 'Bayern München', value: 64.8, logo: '' },
      { name: 'Manchester City', value: 63.8, logo: '' },
      { name: 'Barcelona', value: 61.9, logo: '' },
    ],
    cleanSheets: [
      { name: 'Inter', value: 8, logo: '' },
      { name: 'Paris Saint-Germain', value: 7, logo: '' },
      { name: 'Liverpool', value: 6, logo: '' },
    ],
  },
}; 