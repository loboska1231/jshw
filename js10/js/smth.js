// #LhSfdhM3
// Є сторінка index.html (назва довільна),
// при відвідуванні якої в локальне сховще,
// в масив sessionList зберігається інформація
// про дату та час відвідування сторінки.
// Є  сторінка sessionsListPage.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а малювати в DOM
let sessionList= [];
let sessions = localStorage.getItem('sessionList');
if(sessions)
    sessionList = JSON.parse(sessions); //JSON.parse: unexpected character at line 1 column 1 of the JSON data
sessionList.push(new Date())
localStorage.setItem('sessionList', JSON.stringify(sessionList));

// #Jg0gPO00
// створити конвертор ваги з кг в фунти.
// данні заповнюються через інпут.
// При введенні даних обрахунок стається миттєво,
// без натискань додаткових кнопок
let input = document.getElementById('kilos');
let output = document.getElementById('pounds');
// input.onmouseenter = function (){
//     output.value= parseInt(input.value)*2.2;
// }
input.oninput =function (){
    output.value= parseInt(input.value)*2.2;
}
// #RbQGnH5DuC
// В localStorage зберігаються масиви.
// Вам потрібно зробити функцію, які дістає потрібний вам масив
// з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrayName,objToAdd){
    let storage = localStorage.getItem(arrayName);
    if(storage){
        let t = JSON.parse(storage);
        if(objToAdd)t.push(objToAdd);
        localStorage.setItem(arrayName, JSON.stringify(t));
    }
}
// localStorage.setItem('sessionList', {});
let a = 22;
 addToLocalStorage('sessionList', a)
//     #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків,
// другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується
//     і формується табличка, з відповідним вмістом.
let form1 = document.getElementById('tableCalc');
let table = document.getElementById('table');
form1.onsubmit = function(ev){
     ev.preventDefault();
     let rows = document.getElementById('rows').value;
     let columns = document.getElementById('columns').value;
     let info = document.getElementById('info').value;

    for (let i = 0; i < rows; i++) {
         let row =document.createElement('tr');
         for (let j = 0; j < columns; j++) {
             let blank = document.createElement('td');
             blank.innerText = info;
             row.append(blank);
         }
         table.append(row);
     }
 }
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині)
// створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження,
//     які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло
//     10 секунд - нічого не відбувається
const now = new Date().getTime();
let price = parseInt(localStorage.getItem('price')) || 100;
let time = parseInt(localStorage.getItem('update')) || 0;
if(now-time>1000){
    localStorage.setItem('update',now);
    price+=10;
    localStorage.setItem('price',price);
}
localStorage.setItem('price',price);
document.getElementById('smth').innerText = price;

