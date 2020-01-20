function variableName(name) {
  return !/^\d+|[^\w+]/g.test(name);
}