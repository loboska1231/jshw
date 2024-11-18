// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname;
    this.email=email;
    this.phone=phone;
    console.log(this);
}
let user= new User(1,'Boris','Sushkov','qwrty@gmail.com','+672613461264');
let users = [
    new User(1,'bor','sus','qwrty@gmail.com','+96263461264'),
    new User(2,'asf','ada','trrra@gmail.com','+96124021401'),
    new User(3,'asf','ada','a@gmail.com','+96124021401'),
    new User(4,'asf','ada','ab@gmail.com','+96214114012'),
    new User(5,'asf','ada','abv@gmail.com','+96658561240'),
    new User(6,'asf','ada','abvg@gmail.com','+96123252301'),
    new User(7,'asf','ada','abve@gmail.com','+96124028991'),
    new User(8,'asf','ada','abvee@gmail.com','+96153535551'),
    new User(9,'asf','ada','abveezh@gmail.com','+96125656501'),
    new User(10,'asf','ada','abveezhz@gmail.com','+96008986123')
];
// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(users.filter(user => user.id % 2 === 0));
//  #pOeHKct
//  - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
users.reverse();
console.log(users.sort((a, b) => a.id - b.id));
// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id, name, surname , email, phone, ...order) {
        super(id, name, surname , email, phone);
        this.order = order;
        console.log(this);
    }
}

let clients = [
    new Client(1, 'bor', 'sus', 'qwrty@gmail.com', '+96263461264',
        { title:'phone',name:'xiaomi 99 ultra pro max +- 256 googols @!^&#RI78126glkuyidsgfuykfg',price:44999},
            { title:'headphones',name:'steelseries artis nova',price:9999},
            { title:'wheels',name:'bbs rs `20',price:90000},
            { title:'car1',name:'subaru legacy 2007',price:340000}),
    new Client(2, 'asfa', 'ada2', 'trrra@gmail.com', '+96124021401',
        { title:'tv',name:'xiaomi 923219 ultra ',price:442999},
            { title:'pc',name:'mac air ',price:4999}),
    new Client(3, 'asfar', 'ada3', 'a@gmail.com', '+96124021401',
        { title:'pc',name:'mac air ',price:4999},
            { title:'phone',name:'sony xperia',price:54999},
            { title:'phone',name:'sony xperia',price:54999},
            { title:'phone',name:'sony xperia',price:54999},
            { title:'pc',name:'mac air ',price:47999},
            { title:'pc',name:'mac air ',price:84999}),
    new Client(4, 'asfad', 'ada4', 'ab@gmail.com', '+96214114012',{ title:'notebook',name:'acer ',price:24999}),
    new Client(5, 'asfag', 'ada5', 'abv@gmail.com', '+96658561240',{ title:'phone',name:'iphone 16',price:66999}),
    new Client(6, 'asfet', 'ada6', 'abvg@gmail.com', '+96123252301',{ title:'phone',name:'sony xperia',price:54999}),
    new Client(7, 'asfev', 'ada7', 'abve@gmail.com', '+96124028991',{ title:'phone',name:'htc',price:6899}),
    new Client(8, 'asfaf', 'ada8', 'abvee@gmail.com', '+96153535551',{ title:'car1',name:'subaru legacy 2007',price:340000}),
    new Client(9, 'asfop', 'ada9', 'abveezh@gmail.com', '+96125656501',{ title:'wheels',name:'bbs rs `20',price:90000}),
    new Client(10, 'asful', 'ada10', 'abveezhz@gmail.com', '+96008986123',{ title:'headphones',name:'steelseries artis nova',price:9999})
];
// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log(clients.sort((a, b) => a.order.length - b.order.length));

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car1,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car1
function CarFunc(model,year,maxSpeed, engineVolume){
    this.model = model;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity= engineVolume;
    this.drive = function (){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    this.info = function (){
        for( let key in this){
            console.log(this[key], key);
        }
    }
    this.increaseMaxSpeed = function( speedToAdd){
        this.maxSpeed+=speedToAdd;
        return maxSpeed;
    }
    this.changeYear =function (year){
        if(year <=0) console.log('no');
            this.year = year;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}
function Driver(name, age){
    this.name = name;
    this.age = age;
}
let car1 = new CarFunc('WRX STI','2007',280, 3.3);
console.log(car1.drive());
car1.info();
car1.changeYear(2022);
console.log(car1.year);
console.log(car1.driver);
car1.addDriver(new Driver('stan', 24));
console.log(car1.driver);
console.log(car1.maxSpeed);
car1.increaseMaxSpeed(30);
console.log(car1.maxSpeed);
// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class CarClass {
    constructor(model, year, maxSpeed, engineVolume) {
        this.model = model;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive(){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`;
    }
    info(){
        for( let key in this){
            console.log(this[key], key);
        }
    }
    changeYear(year){
        if(year <=0) console.log('no');
        this.year = year;
    }
    increaseMaxSpeed(speedToAdd){
        this.maxSpeed+=speedToAdd;
        return this.maxSpeed;
    }
    addDriver(driver){
        this.driver = driver;
    }
}
let car2 = new CarClass('lancer 6','2001',220,1.9);
console.log(car2.drive());
car2.info();
car2.changeYear(1999);
console.log(car2.year);
console.log(car2.driver);
car2.addDriver(new Driver('ryan', 22));
console.log(car2.driver);
console.log(car2.maxSpeed);
car2.increaseMaxSpeed(14);
console.log(car2.maxSpeed);

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = shoe;
    }
}
let popelushki = [
    new Popelushka('1231',22,33),
    new Popelushka('1341',21,34),
    new Popelushka('1451',20,40),
    new Popelushka('1671',22,32),
    new Popelushka('1781',23,36),
    new Popelushka('1891',22,39),
    new Popelushka('1901',25,38),
    new Popelushka('1011',24,37),
    new Popelushka('2122',23,31),
    new Popelushka('2232',23,35)
];
console.log(popelushki);
let prince = new Prince('olek',24,36);
console.log(prince);
for( let t of popelushki){
    if(t.footSize === prince.foundShoe){
        console.log(t);
        break;
    }
}
console.log(popelushki.find(t => t.footSize === prince.foundShoe));
// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter
Array.prototype.newForEach = function (callback){
    for(let t of this){
        callback(t);
    }
};
let arr = [1,2,3,4,5];
arr.newForEach(t=> console.log(t));

Array.prototype.newFilter = function (callback){
    let res = [];

    for( let t of this){
        if(callback(t)){
            res.push(t);
        }
    }
    return res;
}
let arr2 = [1,2,3,4,5,6,'pop',6,'poo'];
console.log(arr2.newFilter(t => t===6));