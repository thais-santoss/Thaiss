const axios = require('axios');

describe('Testando Filmes', () => {
  it('Deve retornar uma lista de filmes', async () => {
    const response = await axios.get('https://swapi.dev/api/films/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
