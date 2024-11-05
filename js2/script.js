// ---------------TASK 1----------------
let mass = [1,2,3,4,5,6,7,8,9,10];
console.log(mass);
// ---------------TASK 2----------------
let book1 = {
    title:'White fang',
    pageCount: 244,
    genre:'adventure'
}
let book2 = {
    title:'Plutarch I',
    pageCount: 590,
    genre:'history'
}
let book3 = {
    title:'Mexican',
    pageCount: 43,
    genre:'realism'
}
console.log(book1,book2,book3);
// ---------------TASK 3----------------
let book4 = {
    title:'White fang',
    pageCount: 244,
    genre:'adventure',
    author: {
        name:'Jack London',
        age: 30
    }
}
let book5 = {
    title:'Plutarch I',
    pageCount: 590,
    genre:'history',
    author: {
        name:'Plutarch',
        age: 55
    }
}
let book6 = {
    title:'Mexican',
    pageCount: 43,
    genre:'realism',
    author: {
        name:'Jack London',
        age: 35
    }
}
console.log(book4,book5,book6);
// ---------------TASK 4----------------
let users = [
    {
        name:'boris',
        username:'loboska',
        password:1231},
    {
        name:'anton',
        username:'atn',
        password:2342},
    {
        name:'bog dan',
        username:'key9',
        password:3453},
    {
        name:'vitalya',
        username:'arthas',
        password:4564},
    {
        name:'sasha',
        username:'kamen\'',
        password:5675},
    {
        name:'boris',
        username:'sqsqrr',
        password:6786},
    {
        name:'alesha',
        username:'alesha',
        password:7897},
    {
        name:'nikita',
        username:'4m4z1ng',
        password:8908},
    {
        name:'dima',
        username:'tristram',
        password:9019},
    {
        name:'npc',
        username:'decard cain',
        password:12},
];
console.log(users[0].password,users[1].password,users[2].password,users[3].password,users[4].password,users[5].password,users[6].password,users[7].password,users[8].password,users[9].password,);
// ---------------TASK 5----------------
let TempStatWeek = {
    morning:[11,12,9,8,3,4,5],
    daytime:[17,18,14,14,7,6,10],
    evening:[12,16,13,12,6,5,7]
}
console.log(TempStatWeek);
// ---------------TASK 6----------------
let x=1;
if(x!==0)console.log(true);
else console.log('wrong');
let y=0;
if(y!==0)console.log(true);
else console.log('wrong');
let z=-3;
if(z!==0)console.log(true);
else console.log('wrong');
// ---------------TASK 7----------------
let time =  prompt("write number between 0 and 59");
if(time >=0 && time <=59){
    if(time<=15)console.log('first quarter ');
    if(time<=30 && time>=16)console.log('second quarter');
    if(time<=45 && time>=31)console.log('third quarter');
    if(time>=46) console.log('fourth quarter')
}
else console.log('nah ah')
// ---------------TASK 8----------------
let day = prompt('write a number for day between 1 and 31')
if(day >=1 && day <=31){
    if(day<=11)console.log('first decade ');
    if(day<=21 && day>=12)console.log('second decade');
    if(day<=31 && day>=22)console.log('third decade');
}
else console.log('nah ah')
// ---------------TASK 8----------------
let weekDay = prompt('Write a day of the week');
switch(weekDay){
    case 'monday':
        console.log('boolean algebra, math analyze, philosophy')
        break;
    case 'tuesday':
        console.log(' math analyze, differential equations')
        break;
    case 'wednesday':
        console.log('PE, rights and freedoms')
        break;
    case 'thursday':
        console.log('english')
        break;
    case 'friday':
        console.log('boolean algebra, boolean algebra, english ')
        break;
    case 'saturday':
    case 'sunday':
        console.log('no lessons, only freedom')
        break;
}
// ---------------TASK 9----------------
let a,b;
a= prompt("number for a ");
b= prompt("number for b ");
if(a===b) console.log('a = b ');
else{
    if(a>b) console.log(a);
    else console.log(b);
}
// ---------------TASK 10----------------
let c = prompt("anything");
if(c == false || c == null) c=0;
console.log(c);
// ---------------TASK 11----------------
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер");
}