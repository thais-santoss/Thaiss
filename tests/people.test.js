const axios = require('axios');

describe('Testando Pessoas', () => {
  it('Deve retornar uma lista de pessoas', async () => {
    const response = await axios.get('https://swapi.dev/api/people/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
