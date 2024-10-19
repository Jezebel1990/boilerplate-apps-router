module.exports = {
  '*.{js, jsx, ts, tsx}': (filenames) => [
    `npm run lint --fix . ${filenames.join(' --file')}`,
    `prettier --write ${filenames.join('')}`,
  `npm test -- --findRelatedTests ${filenames.join('')}`
  ]
}
