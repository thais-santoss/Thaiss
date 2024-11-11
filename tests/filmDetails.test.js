const axios = require('axios');

describe('Testando Detalhes de um Filme', () => {
  it('Deve retornar os detalhes de um filme específico', async () => {
    const response = await axios.get('https://swapi.dev/api/films/1/');
    expect(response.status).toBe(200);
    expect(response.data.title).toBe('A New Hope');
  });
});
