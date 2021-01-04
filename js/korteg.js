let arrX = [101, 245, 31];
let arrY = [12, 113, 31];

let count = (arr) => {
  let combinations = arr.map((v, i) =>
    arr.slice(i + 1).map((v2) => Math.pow(v - v2, 2))
  );
  return [].concat.apply([], combinations);
};

console.log(count(arrX));
console.log(count(arrY));

// Array.prototype.combinations = function (n) {
//   return this.reduce(
//     (p, c, i, a) =>
//       p.concat(
//         n > 1
//           ? a
//               .slice(i + 1)
//               .combinations(n - 1)
//               .map((e) => [].concat(e, c))
//           : [[c]]
//       ),
//     []
//   );
// };

// console.log([1, 2, 3].combinations(2));
