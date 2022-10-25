function doAction(position, duration) {
  setTimeout(() => {
    process.stdout.write(position);
  }, duration);
}
doAction('\r|   ', 100);
doAction('\r/   ', 300);
doAction('\r-   ', 500);
doAction('\r\\   ', 700);
doAction('\r/   ', 900);
doAction('\r-   ', 1100);
doAction('\r|   ', 1300);