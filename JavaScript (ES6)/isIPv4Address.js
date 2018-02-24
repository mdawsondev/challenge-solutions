function isIPv4Address(inputString) {
  return inputString.match(/^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/) ? 1 : 0;
}

// I chose to use regex to verify a match, but there were other solutions that I found easier to read.