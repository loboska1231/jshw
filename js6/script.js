// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let strMass = ['hello world', 'lorem ipsum', 'javascript is cool'];
strMass.forEach(a=> console.log(a.length))

// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let UpperCase = ['hello world', 'lorem ipsum', 'javascript is cool'];
UpperCase.forEach(value => console.log(value.toUpperCase()))

// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let LowerCase = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
LowerCase.forEach(value => console.log(value.toLowerCase()))

// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
let i,j;
for (i = 0; i < str1.length; i++) {
    if(str1[i]  !== ' ') break;
}
let res = str1.slice(i);
for (j=res.length-1;j>0;j--) {
    if(str1[j]  !== ' ') break;
}
res = res.slice(0,j);
console.log(res,res.length);
//console.log(str1.trim());


//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

const stringToArray = (str)=> str.split(' ');
let str2 = 'Ревуть воли як ясла повні';
console.log(stringToArray(str2));
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let mass = [10,8,-7,55,987,-1011,0,1050,0];
console.log(mass);
mass = mass.map((t)=>t+'');
console.log(mass);
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (array,direction) =>{
    let result = array.sort((a,b)=> a-b);
    if(direction === 'descending') result.reverse();
    return result;
}
console.log(sortNums([11, 21, 3],'descending'));
// ==========================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(coursesAndDurationArray.filter( t => t.monthDuration>5));
coursesAndDurationArray = coursesAndDurationArray.map((value,index)=>{
    return {...value,id:index+1};
})
console.log(coursesAndDurationArray);
// =========================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз spade ace black
// - всі шістки 6 spade,diamond,heart,clubs
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }
let temp = {
    cardSuit : ['spade', 'diamond', 'heart', 'clubs'],
    value : ['6','7','8','9','10','ace','jack','queen','king'],
    color: ['red','black']
};
let cards = [];
for( let suit of temp.cardSuit){
    for(let value of temp.value){
        let card = {cardSuit: suit, value: value};
        (suit ==='spade' || suit === 'clubs')? card.color = 'black':card.color = 'red';
        cards.push(card);
    }
}
console.log(cards);
console.log(cards.find(t => t.cardSuit === 'spade' && t.value === 'ace'));
console.log(cards.filter(t => t.color === 'red'));
console.log(cards.filter(t => t.cardSuit === 'diamond'));
console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' && card.value !=='7' && card.value !=='8')));
// card spade 6 ----->                           1                          0                     1                    1
//                                                                                 1                    1
//                                                           1
//console.log(cards.filter(card => card.cardSuit === 'clubs' && (card.value !== '6' || card.value !=='7' || card.value !=='8')));
// =========================
//
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let cardsSortedByCardSuit = cards.reduce((basket, card)=>{
       if(card.cardSuit==='spade') basket.spades.push(card);
       if(card.cardSuit==='diamond') basket.diamonds.push(card);
       if(card.cardSuit==='heart') basket.hearts.push(card);
       if(card.cardSuit==='clubs') basket.clubs.push(card);
       return basket;
},{spades: [], diamonds: [], hearts:[], clubs:[]});
console.log(cardsSortedByCardSuit); //  по мастям

// =========================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker
// const findObjectInModules = (arr,item)=>{
//     let result = [];
//     for( let t of arr){
//         if(t.modules.find(obj => obj === item))
//             result.push(t);
//     }
//     return result;
// }
//console.log(findObjects(coursesArray, 'docker'));
let result = coursesArray.reduce((basket,t)=>{
    if(t.modules.find(obj => obj === 'sass')) basket.haveSASS.push(t);
    if(t.modules.find(obj => obj === 'docker')) basket.haveDOCKER.push(t);
    return basket;
},{haveSASS: [], haveDOCKER:[]});
console.log(result);
