let arrNum = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 5, y: 6 }, { x: 7, y: 8 }, { x: 1, y: 5 }];
let result = 0;
let count = 0;
let arrPath = [];

let res = (arr) => {
  arr.map((user) => {
    arr.map((user, j) => {
      result = parseInt(
        Math.sqrt(Math.pow(arr[0].x - arr[j].x, 2) + Math.pow(arr[0].y - arr[j].y, 2))
      );
      console.log(`итерация ${count}: `, result);
     if (j != 0) arrPath.push(result);
      count++;
    });
    arr.shift();
    console.log(arr);
  });
  return console.log(arrPath);
};

res(arrNum);

// parseInt(
//     Math.sqrt(
//       Math.pow(user[0] - user[j], 2) + Math.pow(user[0] - user[j], 2)
//     )
//   );
