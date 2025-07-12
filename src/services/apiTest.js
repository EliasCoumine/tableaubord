import { footballApi } from './footballApi';

export const testAPI = async () => {
  console.log('🔍 Testing REAL API connection...');
  console.log('📡 API Base URL:', 'https://v3.football.api-sports.io');
  console.log('🔑 API Key:', '9fc53816aa32e20ace88ab0b44046042');
  
  try {
    // Test top scorers API
    console.log('⚽ Testing REAL top scorers API...');
    const topScorers = await footballApi.getUCLTopScorers(2023);
    console.log('✅ REAL Top scorers response:', topScorers);
    
    if (topScorers.response && topScorers.response.length > 0) {
      console.log('🎯 REAL Top 5 Scorers:');
      topScorers.response.slice(0, 5).forEach((player, index) => {
        console.log(`${index + 1}. ${player.player.name} - ${player.statistics[0].goals.total} goals (${player.statistics[0].team.name})`);
      });
    }
    
    // Test assists API
    console.log('🎯 Testing REAL assists API...');
    const assists = await footballApi.getUCLAssists(2023);
    console.log('✅ REAL Assists response:', assists);
    
    return { success: true, data: { topScorers, assists } };
  } catch (error) {
    console.error('❌ REAL API test failed:', error);
    console.error('🔍 Error details:', error.response?.data || error.message);
    return { success: false, error: error.message };
  }
};

// Run test when imported
console.log('🚀 Starting REAL API test...');
testAPI().then(result => {
  console.log('📊 REAL API test result:', result);
  if (result.success) {
    console.log('✅ REAL API is working correctly! Using REAL data!');
  } else {
    console.log('❌ REAL API test failed');
  }
}); 