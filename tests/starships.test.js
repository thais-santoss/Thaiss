const axios = require('axios');

describe('Testando Naves', () => {
  it('Deve retornar uma lista de naves', async () => {
    const response = await axios.get('https://swapi.dev/api/starships/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
