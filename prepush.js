exec('yarn copy');
exec('git add .');
if (exec('git commit -m "Update Github pages"').code !== 0) {
  exit(0);
}