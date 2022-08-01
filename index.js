function isDarkmode() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return true;
  } else {
    return false;
  }
}

module.exports.isDarkmode = isDarkmode;
