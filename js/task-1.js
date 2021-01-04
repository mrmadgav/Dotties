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

let massObj = { x: [], y: [] };
let abLength = [];
let i = 0;
let arr3 = [];
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
  ctx.rect(RandomX(0, canvas.width), RandomY(0, canvas.height), 5, 5);
  ctx.fill();
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
