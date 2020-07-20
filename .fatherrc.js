const options = {
  entry: 'src/index.js',
  doc: {
    title: 'blink',
    themeConfig: { mode: 'light' },
  },
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  runtimeHelpers: true,
  esm: 'babel', 
  cjs: 'babel',
  autoprefixer: {
    browsers: ['ie>10', 'Safari >= 6'],
  }
};

export default options;