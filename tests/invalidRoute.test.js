const axios = require('axios');

describe('Testando Rota Inexistente', () => {
  it('Deve retornar erro 404 para rota inexistente', async () => {
    try {
      await axios.get('https://swapi.dev/api/heroes/');
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
