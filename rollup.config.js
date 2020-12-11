export default {
  entry: 'src/index.js',
  dest: 'lib/webql-tag.umd.js',
  format: 'umd',
  sourceMap: true,
  moduleName: 'webql-tag',
  onwarn
};

function onwarn(message) {
  const suppressed = [
    'UNRESOLVED_IMPORT',
    'THIS_IS_UNDEFINED'
  ];

  if (!suppressed.find(code => message.code === code)) {
    return console.warn(message.message);
  }
}
