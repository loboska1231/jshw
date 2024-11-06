//-------------------TASK 1--------------------
for (let i =0;i<=9;i++){
    document.write(`
       <div>
        <p>test</p>
       </div>
    `);
}
//-------------------TASK 2--------------------
for (let i =0;i<=9;i++){
    document.write(`
       <div>
        <p>testNum2  ${i}</p>
       </div>
    `);
}
//--------------------TASK 3-------------------------

let i = 0;
while (i <= 19) {
    document.write(`<h1> TASK3</h1>`);
    i++
}
//-------------------TASK 4--------------------
i = 0;
while (i <= 19) {
    document.write(`<h1> TASK3 ${i}</h1>`);
    i++
}
//------------------TASK 5---------------------

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`);
for(let x of listOfItems){
    document.write(`<li>${x}</li>`);
}
document.write(`</ul>`);
//------------------TASK 6---------------------
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for(let x of products){
    document.write(`
         <div class="product-card">
            <h3 class="product-title">${x.title}. Price - ${x.price}</h3>
            <img src="${x.image}" alt="" class="product-image">
        </div>
    `);
}
//------------------TASK 7---------------------
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for(let x of  users){
    if(x.status) console.log( x,'  status == true');
}
console.log('---------------------------------------------------------------------')
for(let x of users){
    if(!x.status) console.log( x,'  status == false');
}
console.log('---------------------------------------------------------------------')
for(let x of users){
    if(x.age>=30) console.log( x,'  age >=30');
}

