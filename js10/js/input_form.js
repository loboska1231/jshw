// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні
// на кнопку зникав елемент з id="text".
let div1= document.createElement('div');
let button1 = document.createElement('button');
button1.innerText = 'flex';
div1.id = 'text';
document.body.append(div1);
button1.onclick = function (){
    div1.style.display = 'none';
}
document.body.append(div1,button1);
//         #j693ca8
//- створити інпут який приймає вік людини та кнопку
// яка підтверджує дію.При натисканні на кнопку
// зчитати інформацію з інпуту та перевірити вік чи меньше
// він ніж 18, та повідомити про це користувача
let input1 = document.createElement('input');
let submit1 = document.createElement('button');
submit1.type = 'submit';
submit1.innerText = 'send1';
document.body.append(input1,submit1);
submit1.onclick = function(){
    if( parseInt(input1.value) || parseInt(input1.value) ===0){
        (input1.value> 18)? console.log(true): console.log(false);
    }
    else console.log('wrong type ');
}
// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом
let send = document.getElementById('sendName');
send.onclick = function (){
    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age =  parseInt(document.getElementById('age').value);
    if(parseInt(document.getElementById('age').value)|| parseInt(document.getElementById('age').value)===0) {
        let div2 = document.createElement('div');
        div2.innerText = name + ' ' + surname + ' ' + age;
        document.body.append(div2);
    }
    else console.log('age wrong type');
    let form1 =  document.getElementById('f1');
    form1.onsubmit= function (ev){
        ev.preventDefault();
    }
}

// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки
// буде додавати до неї +1


// let num = document.getElementById('num');
// let submit = document.getElementById('plus');
// submit.onclick = function (){
//     num.value= parseInt(num.value) + 1;
//     reload?
// }
let num = localStorage.getItem('number')||0;
num++;
localStorage.setItem('number', num);
document.getElementById('div1').innerText = num;