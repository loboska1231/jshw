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
let user= new User(1,'Boris','Sushkov','qwrty@gmail.com','672613461264');
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let users1 = [];
for (let i = 0; i < 10; i++) {
    users1[i] = new User(i,'a'+i,'b'+i,'c'+i,'d'+i);
}
console.log(users1);
console.log(users1.filter(t => t.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let users2 = [];
for (let i = 9; i >= 0; i--) {
    users2[i] = new User(9-i,'a'+i,'b'+i,'c'+i,'d'+i);
}
console.log(users2);
console.log(users2.sort((a, b) => a.id - b.id));
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id, name, surname , email, phone, order) {
        super(id, name, surname , email, phone);
        this.order = order;
        console.log(this);
    }
}
let order = ['mouse','keyboard','monitor','car'];
let client1 = new Client(1,'boris','sushkov','tasfduka@gmail.com', 71294712794, order);
let clients = [];
for (let i = 0; i < 10; i++) {
    clients[i] = new Client(i,'a'+i,'b'+i,'c'+i,'d'+i);
}
clients[0].order = order[0];
clients[1].order = order.slice(0,2);
clients[2].order = order.slice(1,3);
clients[3].order = order.slice(0,3);
console.log(clients);
console.log(clients.sort((a, b) => {
    a.order.length - b.order.length
}));
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// Через Array.prototype. створити власний foreach, filter, map