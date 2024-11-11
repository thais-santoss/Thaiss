const axios = require('axios');

describe('Testando Espécies', () => {
  it('Deve retornar uma lista de espécies', async () => {
    const response = await axios.get('https://swapi.dev/api/species/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
