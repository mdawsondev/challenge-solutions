function areSimilar(a, b) {
  const ad = a.filter((v, i) => v != b[i])
  const bd = b.filter((v, i) => v != a[i])
  return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

/*
* This code was submitted by user wanicode, but it was much more clever than my solution so I decided to explain this function rather than archive my own.
* We begin by taking two arrays (a, b) and filtering out the dissimilarities of each, `ad` housing any differences found in `a`, and `bd` doing the same for `b`.
* Once the differences have been logged, we compare. If `ad.length` is `0`, that implies there were no differences, so the result is `true`. On the other hand, if the length is `2` (implying there are only two differences), we join those differences and compare it to a reversal of `bd`. If these two results are a match, that means they could be swapped in the original array, returning `true`.
* If `ad.length` is anything other than `0` or `2`, or if the two differences can't be swapped, we return `false`.
*/