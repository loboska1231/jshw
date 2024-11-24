// #8Nmt60ZT
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
let div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');
div.style.background = 'red';
div.style.color = 'green';
div.style.fontSize = '40px';
div.innerText='Bugaga';
document.body.append(div);
//     #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)
let mass = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
for(let t of mass){
    let li = document.createElement('li');
    li.innerText = t;
    ul.append(li);
}
document.body.append(ul);
// #jeBqHV525U5
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for(let t of coursesAndDurationArray){
    let div = document.createElement('div');
    let title = document.createElement('h3');
    let duration = document.createElement('p');
    title.innerText = t.title;
    duration.innerText = 'month duration :: '+t.monthDuration;
    div.append(title,duration);
    document.body.append(div);
}





// =========================
//     #Kx1xgoKy8
//     - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// =========
for(let t of coursesAndDurationArray){
    let div = document.createElement('div');
    div.classList.add('item');
    let title = document.createElement('h3');
    title.classList.add('heading');
    title.innerText=t.title + ' num2';
    let duration = document.createElement('p');
    duration.innerText=t.monthDuration;
    duration.classList.add('description');
    div.append(title,duration);
    document.body.append(div);
}




// =================