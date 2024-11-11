const axios = require('axios');

describe('Testando Detalhes de um Planeta', () => {
  it('Deve retornar os detalhes de um planeta específico', async () => {
    const response = await axios.get('https://swapi.dev/api/planets/1/');
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Tatooine');
  });
});
