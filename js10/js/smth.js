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
let t = new Date();
sessionList.push(t)
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
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
//
//     #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
//
//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів