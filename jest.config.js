module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest' // Transforma arquivos TypeScript e TSX
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'], // Ignora diretórios do Next.js e node_modules nos testes
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.jest.json' // Caminho para o tsconfig específico do Jest
    }
  },
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'], // Arquivo de setup para inicializações de testes

  collectCoverage: true, // Habilita a coleta de cobertura de testes
  collectCoverageFrom: [
    'src/**/*.ts(x)?', // Coleta cobertura de arquivos .ts e .tsx
    '!src/app/**', // Ignora a pasta app
    '!src/lib/registry.tsx' // Ignora o arquivo registry.tsx
  ],
  modulePaths: ['<rootDir>/src/'] // Permite importar módulos a partir de 'src' sem precisar de caminhos relativos
}
