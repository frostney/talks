const commitMessage = 'Update Github pages';

// If last commit did already update Github pages, no need to run everything again
const lastCommit = exec('git log --format=%B -n 1 HEAD', { silent: true }).replace(/\n/g, '');

if (lastCommit !== commitMessage) {
  exec('yarn clean');
  exec('yarn copy');
  exec('git add .');
  if (exec(`git commit -m "${commitMessage}"`).code !== 0) {
    exit(0);
  }
} else {
  console.log('Nothing to do.');
}
