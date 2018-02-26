function isMAC48Address(s) {
  return /([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(s);
}