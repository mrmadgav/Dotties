const item = document.createElement("a");
item.href = "#";
const nav = document.querySelector(".nav");
nav.appendChild(item);

const heading = document.createElement("h1"); // не отображается
heading.textContent = "Построение произвольного количества точек на плоскости";

// НАЧАЛО ФУНКЦИИ

// Обращаемся к канвасу...Уважаемый канвас хД
const canvas = document.getElementById("image_1");
const ctx = canvas.getContext("2d");

// переменные для основной функции
let arrTemp = [];
let massObj = { x: [], y: [] };
let abLength = [];
let i = 0;
let arr3 = [];
let arrPath = [];
let arrPathAll = [];
let minPath;
let text = 1;
// фунция создания рандомной координаты Х
const RandomX = function (min, max) {
  let x = Math.round(Math.random() * (max - min) + min);
  console.log("координата Х:", x);
  massObj.x.push(x);
  return x;
};

// фунция создания рандомной координаты Y
const RandomY = function RandomY(min, max) {
  let y = Math.round(Math.random() * (max - min) + min);
  console.log("координата Y:", y);
  massObj.y.push(y);
  return y;
};

// Вешаем слушатель генерации точек
document.getElementById("run").addEventListener("click", function () {
  // создаем точки
  let xCorr = RandomX(0, canvas.width);
  let yCorr = RandomY(0, canvas.height);
  ctx.rect(xCorr, yCorr, 5, 5);
  arrTemp.push({ x: xCorr, y: yCorr });
  console.log(arrTemp);
  ctx.fill();
  // делаем подпись счетчика с координатами к точке
  ctx.fillText(`${text}, x:${xCorr}, y:${yCorr}`, xCorr + 5, yCorr + 5);
  text++;
});

// Вешаем слушатель поиска кратчайшего расстояния на плоскости
document.getElementById("count").addEventListener("click", function () {
  // создает массив всех возможных комбинаций квадратов координат
  let combine = (arr) => {
    let combinations = arr.map((v, i) =>
      arr.slice(i + 1).map((v2) => Math.pow(v - v2, 2))
    );
    return [].concat.apply([], combinations);
  };

  //вызываем для Х
  let arrX = combine(massObj.x);
  console.log("массив квадратов X:", arrX);

  // вызываем для Y
  let arrY = combine(massObj.y);
  console.log("массив квадратов Y:", arrY);

  // Складываем квадраты координат попарно. Извлекаем корень. Пушим в новый массив
  let arrSum = (arrX, arrY) => {
    for (i = 0; i < arrX.length; i++) {
      arr3.push(parseInt(Math.sqrt(parseInt(arrX[i]) + arrY[i])));
    }
    return console.log("Расстояние между точками:", arr3);
  };
  arrSum(arrX, arrY);

  let message = `Кратчайшее расстояние между точками = ${Math.min(...arr3)}`;
  document.getElementById("message").innerHTML = message;
});

// Слушатель очистки канваса
document.getElementById("clear").addEventListener("click", function () {
  alert("Функция в разработке!");
});

// слушатель для кнопки рассчета маршрута

document.getElementById("path").addEventListener("click", function () {
  let resultPath = (arr) => {
    for (let k = 0; k < arrTemp.length; k++) {
      arr.map(function (elem, j) {
        if (j != 0)
          arrPath.push(
            parseInt(
              Math.sqrt(
                Math.pow(arr[0].x - arr[j].x, 2) +
                  Math.pow(arr[0].y - arr[j].y, 2)
              )
            )
          );        
        console.log("Нулевой элемент массива = ", arr[0]);
        minPath = Math.min(...arrPath);
        console.log("Ближайшая к нему точка", arr[arrPath.indexOf(minPath)]);
        arr.shift();
        // elem[nearDotIndex].fillStyle = "green";
      });
      arrPathAll.push(minPath);
    }
    console.log(`Расстояния от последней точки: ${arrPath}`);
  };

  resultPath(arrTemp);
  console.log("Совокупный маршрут", arrPathAll);
});
