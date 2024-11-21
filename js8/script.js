// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCopy(obj) {
    let copy = JSON.parse(JSON.stringify(obj));
    if(obj){
        let funcs = [];
        for(let t in obj){
            if (typeof obj[t] === 'function'){
                const fucnClone = obj[t].bind();
                funcs.push(fucnClone);
            }
        }
        for(let f of funcs){
            copy[f] = funcs.funcClone;
        }
        return copy;
    }
    else console.log('null | NaN | undefined')
}

let user = {
    name: 'asd',
    age: '1231',
    status: true,
    pou(){
        console.log(this);
    }
}
let t = deepCopy(user);
console.log(t);
//
// let userCopy = {...user};
// userCopy.name = 'loboska';
// console.log(userCopy.name);
// console.log(user);

// #iz6emEsP2BA
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let result = coursesAndDurationArray.map((t, id)=>{return {...t,id}} );
console.log(result);
// за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration (деструктуризація)
//     Зробити все ВИКЛЮЧНО за допомоги інлайн конструкції