// У нас есть дерево, структурированное как вложенные списки ul/li.

// Напишите код, который выведет каждый элемент списка в консоль :

// 1. Используйте цикл for..of
// 2. Вывести общее кол-во элементов в консоль
// 3. Вытянуть текст из тегов li и записать текст содержащийся в каждом элементе в массив — вывсести этот массив в консоль
// 4. Вытянуть все аттрибуты которые есть в теге ul, перебрать их (for..of) и записать значение каждого аттрибута в массив — вывсести этот массив в консоль
// 5. Так-же записать в отдельный массив каждое имя аттрибута — вывести массив в консоль
// 6. С помощью JS изменить текст в последнем теге li на — «Привет меня зовут » + Ваше имя
// 7. Добавить первому элементу li аттрибут ‘data-my-name‘ со значением в котором будет лежать Ваше имя
// 8. Удалить у тега ul аттрибут ‘data-dog-tail‘


let arr = [];
let liElement = document.getElementsByTagName("li");
let ulElement = document.querySelector("ul");
for (let i of liElement) {
    arr.push(i.firstChild.data)
}
console.log(arr);

let arrTwo = [];

for (let i of ulElement.attributes) {
    arrTwo.push(i)
}
console.log(arrTwo);

ulElement.lastElementChild.innerHTML = "Pavlo";

ulElement.firstElementChild.setAttribute("data-name", "Pavlo");

ulElement.removeAttribute("data-dog-tail");