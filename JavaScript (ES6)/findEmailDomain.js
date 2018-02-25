function findEmailDomain(e) {
  return e.slice(e.lastIndexOf('@')+1);
}