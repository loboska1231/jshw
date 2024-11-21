// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
// Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.
function deepCopy(obj) {
    if(obj){
        let copy = JSON.parse(JSON.stringify(obj));
        for(let key in obj){
            if(typeof obj[key] ==='function') copy[key] = obj[key].bind();
        }
        // убрал масив, "создаю" поле с key и записываю в него функцию через bind
        return copy;
    }
    else console.log('null | NaN | undefined | false')
}

let user1 = {
    name: 'asd',
    age: '1231',
    status: true,
    nums:[1,232,13,12,3412,124,12,],
    pou(){
        console.log(name);
    }
};
let user2 ;
console.log(deepCopy(user1));
console.log(deepCopy(user2));

//
// let userCopy = {...user};
// userCopy.name = 'loboska';
// console.log(userCopy);
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