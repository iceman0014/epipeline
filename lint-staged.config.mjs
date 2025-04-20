export default {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{scss,css}': ['stylelint --fix', 'prettier --write'],
  '*.{md,html}': ['prettier --write'],
}
