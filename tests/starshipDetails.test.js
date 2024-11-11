const axios = require('axios');

describe('Testando Detalhes de uma Nave', () => {
  it('Deve retornar os detalhes de uma nave específica', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/9/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Death Star');
  });
});
