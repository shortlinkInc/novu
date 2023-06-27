module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|webp|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};
