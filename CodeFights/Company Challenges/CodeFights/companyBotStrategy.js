// Written functionally, we first take our list of results and remove any data that we don't need.
// We then reduce the remaining results into a single accumulative value, and divide by the total
// number of relevant results, returning our average.

function companyBotStrategy(trainingData) {
  return trainingData.filter(result => result[1] === 1)
    .reduce((acc, current, i, arr) => {
      if (i !== arr.length - 1) return acc + current[0];
      return ((acc + current[0]) / arr.length);
    }, 0);
}