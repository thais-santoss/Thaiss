const axios = require('axios');

describe('Testando Veículos', () => {
  it('Deve retornar uma lista de veículos', async () => {
    const response = await axios.get('https://swapi.dev/api/vehicles/');
    expect(response.status).toBe(200);
    expect(response.data.results).toBeInstanceOf(Array);
  });
});
