const axios = require('axios');

describe('Testando Planetas', () => {
  it('Deve retornar uma lista de planetas', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
