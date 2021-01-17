function cartesian(...arrays) {
  // находим число элементов в декартовом произведении
  let resultLength = 1;
  for (const array of arrays) {
    resultLength *= array.length;
  }

  // создаём массив такого размера и перебираем номер элемента
  const result = new Array(resultLength);
  for (let i = 0; i < resultLength; ++i) {
    // один элемент декартова произведения
    const tuple = new Array(arrays.length);
    let tupleIndex = i;
    // цикл в обратном порядке нужен чтобы элементы начинали изменяться с конца
    for (let j = arrays.length - 1; j >= 0; --j) {
      const array = arrays[j];
      // имеем биекцию между индексами элементов декартова произведения (числа от 0 до resultLength-1)
      // и кортежами длины arrays.length, в которых каждый элемент — индекс в соответствующем массиве
      tuple[j] = array[tupleIndex % array.length];
      // целочисленное деление
      tupleIndex = Math.floor(tupleIndex / array.length);
    }
    result[i] = tuple;
  }
  return result;
}
// например
console.log(cartesian([1, 2], [10, 20], [100, 200, 300]));
// будет равно
// [[1, 10, 100], [1, 10, 200], [1, 10, 300], [1, 20, 100], [1, 20, 200], ...]
