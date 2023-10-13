const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
  // Outras configurações do withImages, se necessário
  distDir: 'out', // Pode ser diferente dependendo da sua configuração
  // Outras configurações do Next.js, se necessário
});
