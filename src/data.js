

export const seasons = [
  { label: '2024/2025', value: 2025 },
  { label: '2023/2024', value: 2024 },
  { label: '2022/2023', value: 2023 },
];

export const teamOfTheSeason = {
  2025: [
    { name: 'Kane', club: 'Bayern München', rating: 7.9, avatar: '/icons/player/Harry Kane.png', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Dembélé', club: 'Paris', rating: 7.9, avatar: '/icons/player/Dembele.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Raphinha', club: 'Barcelona', rating: 8.3, avatar: '/icons/player/Raphinha.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Mac Allister', club: 'Liverpool', rating: 7.6, avatar: '', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Bellingham', club: 'Real Madrid', rating: 7.6, avatar: '/icons/player/Jude Bellingham.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Yamal', club: 'Barcelona', rating: 7.9, avatar: '/icons/player/Lamine Yamal.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Mendes', club: 'Paris', rating: 7.7, avatar: '/icons/player/Nuno Mendes.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'van Dijk', club: 'Liverpool', rating: 7.3, avatar: '', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Ribeiro', club: 'Lille', rating: 7.3, avatar: '', logo: '' },
    { name: 'Hakimi', club: 'Paris', rating: 7.9, avatar: '/icons/player/Hakimi.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Raya', club: 'Arsenal', rating: 7.6, avatar: '', logo: '/icons/club/Arsenal FC.png' },
  ],
  2024: [ 
    { name: 'Vinicius', club: 'Real Madrid', rating: 8.1, avatar: '/icons/player/Vinicius Junior.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Dembélé', club: 'Paris', rating: 7.9, avatar: '/icons/player/Dembele.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Raphinha', club: 'Barcelona', rating: 8.3, avatar: '/icons/player/Raphinha.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Merino', club: 'Liverpool', rating: 7.6, avatar: '', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Bellingham', club: 'Real Madrid', rating: 7.8 , avatar: '/icons/player/Jude Bellingham.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Rodri', club: 'Barcelona', rating: 7.9, avatar: '/icons/player/Rodri.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Cancelo', club: 'Barcelona', rating: 7.7, avatar: '', logo: '/icons/club/FC Barcelona.png' },
    { name: 'van Dijk', club: 'Liverpool', rating: 7.3, avatar: '', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Ribeiro', club: 'Lille', rating: 7.3, avatar: '', logo: '' },
    { name: 'Hakimi', club: 'Paris', rating: 7.9, avatar: '/icons/player/Hakimi.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Sommer', club: 'Arsenal', rating: 7.6, avatar: '', logo: '/icons/club/Arsenal FC.png' },
  ],
  2023: [ /* ...similar mock data for 2022/23... */ ],
};

// Comprehensive player database with all stats
export const playerDatabase = {
  2025: [
    { name: 'Raphinha', club: 'Barcelona', goals: 13, assists: 8, rating: 8.31, goalsPlusAssists: 21, avatar: '/icons/player/Raphinha.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Serhou Guirassy', club: 'Borussia Dortmund', goals: 13, assists: 4, rating: 7.80, goalsPlusAssists: 17, avatar: '/icons/player/Guirassy.png', logo: '/icons/club/Borussia Dortmund.png' },
    { name: 'Robert Lewandowski', club: 'Barcelona', goals: 11, assists: 0, rating: 7.50, goalsPlusAssists: 11, avatar: '/icons/player/Lewandowski.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Ousmane Dembélé', club: 'Paris Saint-Germain', goals: 8, assists: 6, rating: 7.89, goalsPlusAssists: 14, avatar: '/icons/player/Dembele.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Vinicius Junior', club: 'Real Madrid', goals: 9, assists: 1, rating: 7.78, goalsPlusAssists: 10, avatar: '/icons/player/Vinicius Junior.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Harry Kane', club: 'Bayern München', goals: 9, assists: 4, rating: 7.87, goalsPlusAssists: 13, avatar: '/icons/player/Harry Kane.png', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Kylian Mbappé', club: 'Real Madrid', goals: 7, assists: 1, rating: 7.60, goalsPlusAssists: 8, avatar: '/icons/player/Mbappe.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Lautaro Martinez', club: 'Inter Milan', goals: 11, assists: 0, rating: 7.40, goalsPlusAssists: 11, avatar: '/icons/player/Lautaro Martinez.png', logo: '/icons/club/Inter Milan.png' },
    { name: 'Julian Alvarez', club: 'Liverpool', goals: 7, assists: 2, rating: 7.20, goalsPlusAssists: 9, avatar: '/icons/player/Julian Alvarez.png', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Erling Haaland', club: 'Manchester City', goals: 8, assists: 0, rating: 7.30, goalsPlusAssists: 8, avatar: '/icons/player/Haaland.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Achraf Hakimi', club: 'Paris Saint-Germain', goals: 4, assists: 5, rating: 7.87, goalsPlusAssists: 9, avatar: '/icons/player/Hakimi.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Lamine Yamal', club: 'Barcelona', goals: 6, assists: 3, rating: 7.92, goalsPlusAssists: 9, avatar: '/icons/player/Lamine Yamal.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Antoine Griezmann', club: 'Atletico Madrid', goals: 7, assists: 2, rating: 7.85, goalsPlusAssists: 9, avatar: '', logo: '/icons/club/Atlético de Madrid.png' },
    { name: 'Nuno Mendes', club: 'Paris Saint-Germain', goals: 2, assists: 4, rating: 7.72, goalsPlusAssists: 6, avatar: '/icons/player/Nuno Mendes.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Mohamed Salah', club: 'Liverpool', goals: 6, assists: 4, rating: 7.63, goalsPlusAssists: 10, avatar: '/icons/player/Salah.png', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Julian Brandt', club: 'Borussia Dortmund', goals: 3, assists: 5, rating: 7.45, goalsPlusAssists: 8, avatar: '', logo: '/icons/club/Borussia Dortmund.png' },
    { name: 'Joshua Kimmich', club: 'Bayern München', goals: 2, assists: 4, rating: 7.35, goalsPlusAssists: 6, avatar: '/icons/player/Kimmich.png', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Bradley Barcola', club: 'Paris Saint-Germain', goals: 3, assists: 4, rating: 7.25, goalsPlusAssists: 7, avatar: '', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Marcos Llorente', club: 'Atlético Madrid', goals: 2, assists: 4, rating: 7.15, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Atlético de Madrid.png' },
    { name: 'Fabián Ruiz', club: 'Paris Saint-Germain', goals: 2, assists: 4, rating: 7.10, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Jonathan David', club: 'Lille', goals: 5, assists: 4, rating: 7.05, goalsPlusAssists: 9, avatar: '', logo: '' },
  ],
  2024: [
    { name: 'Harry Kane', club: 'Bayern München', goals: 8, assists: 4, rating: 7.76, goalsPlusAssists: 12, avatar: '/icons/player/Harry Kane.png', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Kylian Mbappé', club: 'Paris Saint-Germain', goals: 8, assists: 0, rating: 7.77, goalsPlusAssists: 8, avatar: '/icons/player/Mbappe.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Antoine Griezmann', club: 'Atlético Madrid', goals: 6, assists: 1, rating: 7.86, goalsPlusAssists: 7, avatar: '', logo: '/icons/club/Atlético de Madrid.png' },
    { name: 'Vinicius Junior', club: 'Real Madrid', goals: 6, assists: 4, rating: 8.05, goalsPlusAssists: 10, avatar: '/icons/player/Vinicius Junior.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Álvaro Morata', club: 'Atlético Madrid', goals: 5, assists: 1, rating: 7.20, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Atlético de Madrid.png' },
    { name: 'Joselu', club: 'Real Madrid', goals: 5, assists: 0, rating: 7.10, goalsPlusAssists: 5, avatar: '/icons/player/Joselu.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Phil Foden', club: 'Manchester City', goals: 5, assists: 3, rating: 7.93, goalsPlusAssists: 8, avatar: '/icons/player/Phil Foden.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Julián Álvarez', club: 'Manchester City', goals: 5, assists: 2, rating: 7.40, goalsPlusAssists: 7, avatar: '/icons/player/Julian Alvarez.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Rasmus Højlund', club: 'Manchester United', goals: 5, assists: 0, rating: 7.15, goalsPlusAssists: 5, avatar: '', logo: '' },
    { name: 'Rodrygo', club: 'Real Madrid', goals: 5, assists: 2, rating: 7.30, goalsPlusAssists: 7, avatar: '/icons/player/Rodrygo.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Jude Bellingham', club: 'Real Madrid', goals: 4, assists: 5, rating: 7.77, goalsPlusAssists: 9, avatar: '/icons/player/Jude Bellingham.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Marcel Sabitzer', club: 'Borussia Dortmund', goals: 2, assists: 5, rating: 7.25, goalsPlusAssists: 7, avatar: '', logo: '/icons/club/Borussia Dortmund.png' },
    { name: 'Ilkay Gündogan', club: 'Barcelona', goals: 2, assists: 4, rating: 7.35, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Bukayo Saka', club: 'Arsenal', goals: 4, assists: 4, rating: 7.71, goalsPlusAssists: 8, avatar: '/icons/player/Bukayo Saka.png', logo: '/icons/club/Arsenal FC.png' },
    { name: 'Erling Haaland', club: 'Manchester City', goals: 4, assists: 3, rating: 7.78, goalsPlusAssists: 7, avatar: '/icons/player/Haaland.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Rodri', club: 'Manchester City', goals: 2, assists: 2, rating: 8.08, goalsPlusAssists: 4, avatar: '/icons/player/Rodri.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Joao Cancelo', club: 'Barcelona', goals: 1, assists: 3, rating: 7.75, goalsPlusAssists: 4, avatar: '', logo: '/icons/club/FC Barcelona.png' },
  ],
  2023: [
    { name: 'Erling Haaland', club: 'Manchester City', goals: 12, assists: 1, rating: 8.20, goalsPlusAssists: 13, avatar: '/icons/player/Haaland.png', logo: '/icons/club/Manchester City.png' },
    { name: 'Mohamed Salah', club: 'Liverpool', goals: 8, assists: 2, rating: 7.80, goalsPlusAssists: 10, avatar: '/icons/player/Salah.png', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Vinicius Junior', club: 'Real Madrid', goals: 7, assists: 5, rating: 8.10, goalsPlusAssists: 12, avatar: '/icons/player/Vinicius Junior.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Kylian Mbappé', club: 'Paris Saint-Germain', goals: 7, assists: 3, rating: 7.90, goalsPlusAssists: 10, avatar: '/icons/player/Mbappe.png', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Robert Lewandowski', club: 'Barcelona', goals: 5, assists: 1, rating: 7.60, goalsPlusAssists: 6, avatar: '/icons/player/Lewandowski.png', logo: '/icons/club/FC Barcelona.png' },
    { name: 'Olivier Giroud', club: 'AC Milan', goals: 5, assists: 2, rating: 7.40, goalsPlusAssists: 7, avatar: '', logo: '/icons/club/AC Milan.png' },
    { name: 'Rodrygo', club: 'Real Madrid', goals: 5, assists: 2, rating: 7.50, goalsPlusAssists: 7, avatar: '/icons/player/Rodrygo.png', logo: '/icons/club/Real Madrid.png' },
    { name: 'Darwin Nunez', club: 'Atlético Madrid', goals: 4, assists: 1, rating: 7.20, goalsPlusAssists: 5, avatar: '', logo: '/icons/club/Atlético de Madrid.png' },
    { name: 'Edin Dzeko', club: 'AC Milan', goals: 4, assists: 1, rating: 7.10, goalsPlusAssists: 5, avatar: '', logo: '/icons/club/AC Milan.png' },
    { name: 'Chuopo-Moting', club: 'Bayern München', goals: 4, assists: 0, rating: 7.00, goalsPlusAssists: 4, avatar: '', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Kevin De Bruyne', club: 'Manchester City', goals: 2, assists: 6, rating: 8.00, goalsPlusAssists: 8, avatar: '', logo: '/icons/club/Manchester City.png' },
    { name: 'Federico Dimarco', club: 'Inter Milan', goals: 1, assists: 5, rating: 7.30, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Inter Milan.png' },
    { name: 'Lionel Messi', club: 'Paris Saint-Germain', goals: 4, assists: 4, rating: 8.50, goalsPlusAssists: 8, avatar: '', logo: '/icons/club/Paris Saint-Germain.png' },
    { name: 'Joao Cancelo', club: 'Bayern München', goals: 1, assists: 4, rating: 7.20, goalsPlusAssists: 5, avatar: '', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Leon Goretzka', club: 'Bayern München', goals: 2, assists: 4, rating: 7.15, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Bayern Munich.png' },
    { name: 'Diogo Jota', club: 'Liverpool', goals: 2, assists: 4, rating: 7.25, goalsPlusAssists: 6, avatar: '', logo: '/icons/club/Liverpool FC.png' },
    { name: 'Rafael Leao', club: 'AC Milan', goals: 2, assists: 3, rating: 7.35, goalsPlusAssists: 5, avatar: '', logo: '/icons/club/AC Milan.png' },
    { name: 'Federico Valverde', club: 'Real Madrid', goals: 1, assists: 3, rating: 7.40, goalsPlusAssists: 4, avatar: '', logo: '/icons/club/Real Madrid.png' },
    { name: 'Alessandro Bastoni', club: 'Inter Milan', goals: 1, assists: 3, rating: 7.10, goalsPlusAssists: 4, avatar: '', logo: '/icons/club/Inter Milan.png' },
    { name: 'Lautaro Martinez', club: 'Inter Milan', goals: 3, assists: 3, rating: 7.20, goalsPlusAssists: 6, avatar: '/icons/player/Lautaro Martinez.png', logo: '/icons/club/Inter Milan.png' },
    { name: 'Karim Benzema', club: 'Bayern München', goals: 3, assists: 2, rating: 7.30, goalsPlusAssists: 5, avatar: '', logo: '/icons/club/Bayern Munich.png' },
  ]
};

// Legacy data structure for backward compatibility
export const customStats2025 = {
  playerStats: {
    topScorers: playerDatabase[2025].map(p => ({ name: p.name, club: p.club, value: p.goals, avatar: p.avatar, logo: p.logo })),
    topAssists: playerDatabase[2025].map(p => ({ name: p.name, club: p.club, value: p.assists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
    goalsPlusAssists: playerDatabase[2025].map(p => ({ name: p.name, club: p.club, value: p.goalsPlusAssists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
    playerRatings: playerDatabase[2025].map(p => ({ name: p.name, club: p.club, value: p.rating, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value)
  },
  teamStats: {
    ratings: [
      { name: 'Paris Saint-Germain', value: 7.29, logo: '/icons/club/Paris Saint-Germain.png' },
      { name: 'Real Madrid', value: 7.13, logo: '/icons/club/Real Madrid.png' },
      { name: 'Liverpool', value: 7.13, logo: '/icons/club/Liverpool FC.png' },
      { name: 'Barcelona', value: 7.11, logo: '/icons/club/FC Barcelona.png' },
      { name: 'Bayern München', value: 7.10, logo: '/icons/club/Bayern Munich.png' },
      { name: 'Arsenal', value: 7.03, logo: '/icons/club/Arsenal FC.png' },
      { name: 'Borussia Dortmund', value: 7.02, logo: '/icons/club/Borussia Dortmund.png' },
      { name: 'Inter', value: 7.00, logo: '/icons/club/Inter Milan.png' },
      { name: 'AC Milan', value: 6.93, logo: '/icons/club/AC Milan.png' },
      { name: 'Manchester City', value: 6.87, logo: '/icons/club/Manchester City.png' }
    ],
    goalsPerMatch: [
      { name: 'Barcelona', value: 43, logo: '/icons/club/FC Barcelona.png' },
      { name: 'Paris Saint-Germain', value: 38, logo: '/icons/club/Paris Saint-Germain.png' },
      { name: 'Bayern München', value: 31, logo: '/icons/club/Bayern Munich.png' },
      { name: 'Arsenal', value: 31, logo: '/icons/club/Arsenal FC.png' },
      { name: 'Borussia Dortmund', value: 31, logo: '/icons/club/Borussia Dortmund.png' },
      { name: 'Real Madrid', value: 29, logo: '/icons/club/Real Madrid.png' },
      { name: 'Inter', value: 26, logo: '/icons/club/Inter Milan.png' },
      { name: 'Manchester City', value: 21, logo: '/icons/club/Manchester City.png' },
      { name: 'Liverpool', value: 18, logo: '/icons/club/Liverpool FC.png' },
      { name: 'AC Milan', value: 15, logo: '/icons/club/AC Milan.png' }
    ],
    goalsConcededPerMatch: [
      { name: 'Barcelona', value: 24, logo: '/icons/club/FC Barcelona.png' },
      { name: 'Paris Saint-Germain', value: 15, logo: '/icons/club/Paris Saint-Germain.png' },
      { name: 'Bayern München', value: 18, logo: '/icons/club/Bayern Munich.png' },
      { name: 'Arsenal', value: 10, logo: '/icons/club/Arsenal FC.png' },
      { name: 'Borussia Dortmund', value: 19, logo: '/icons/club/Borussia Dortmund.png' },
      { name: 'Real Madrid', value: 22, logo: '/icons/club/Real Madrid.png' },
      { name: 'Inter', value: 16, logo: '/icons/club/Inter Milan.png' },
      { name: 'Manchester City', value: 20, logo: '/icons/club/Manchester City.png' },
      { name: 'Liverpool', value: 6, logo: '/icons/club/Liverpool FC.png' },
      { name: 'AC Milan', value: 13, logo: '/icons/club/AC Milan.png' }
    ],
    averagePossession: [
      { name: 'Bayern München', value: 64.8, logo: '/icons/club/Bayern Munich.png' },
      { name: 'Manchester City', value: 63.8, logo: '/icons/club/Manchester City.png' },
      { name: 'Barcelona', value: 61.9, logo: '/icons/club/FC Barcelona.png' },
    ],
    cleanSheets: [
      { name: 'Inter', value: 8, logo: '/icons/club/Inter Milan.png' },
      { name: 'Paris Saint-Germain', value: 7, logo: '/icons/club/Paris Saint-Germain.png' },
      { name: 'Liverpool', value: 6, logo: '/icons/club/Liverpool FC.png' },
    ],
  },
};

export const customStats2024 = {
  topScorers: playerDatabase[2024].map(p => ({ name: p.name, club: p.club, value: p.goals, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  topAssists: playerDatabase[2024].map(p => ({ name: p.name, club: p.club, value: p.assists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  goalsPlusAssists: playerDatabase[2024].map(p => ({ name: p.name, club: p.club, value: p.goalsPlusAssists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  playerRatings: playerDatabase[2024].map(p => ({ name: p.name, club: p.club, value: p.rating, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value)
};

export const customStats2023 = {
  topScorers: playerDatabase[2023].map(p => ({ name: p.name, club: p.club, value: p.goals, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  topAssists: playerDatabase[2023].map(p => ({ name: p.name, club: p.club, value: p.assists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  goalsPlusAssists: playerDatabase[2023].map(p => ({ name: p.name, club: p.club, value: p.goalsPlusAssists, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value),
  playerRatings: playerDatabase[2023].map(p => ({ name: p.name, club: p.club, value: p.rating, avatar: p.avatar, logo: p.logo })).sort((a, b) => b.value - a.value)
}; 