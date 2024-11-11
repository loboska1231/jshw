// #I2XsG6f
function TP(a,b)
{
    return a * b;
}
console.log(TP(5,5));

// #ETGAxbEn8l
function Scircle(r)
{
    return 3.14 * r * r;
}
console.log(Scircle(5));

// #Mbiz5K4yFe7
function Scilindre(r,h) {
    return 2*Scircle(r) +2*3.14*r*h;
}
console.log(Scilindre(5,2));

// #SIdMd0hQ
function printMass(...x){
    for(let t of x) console.log(t);
}
let mass = [1,2,3,4,5];
printMass(mass);

// #59g0IsA
function printP(text) {
    document.write(`<p>${text}</p>`);
    console.log('printP ==>' + text);
}
let test ='test'; // заменил значение переменной test с 'foo' на 'test' потому что стринга
printP('plus');
printP(test);

// #hOL6126
function printUL(text){
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
    console.log('printUL ==>' + text);
}
printUL(test); // ::32 let test = 'test'

// #0Kxco1edSN
function printULn(text, num){
    document.write(`<ul>`);
    for(let i =0;i<num;i++){
        document.write(`<li>${text}</li>`);
        console.log('printULn ==>' + text + ' i = '+i);
    }
    document.write(`</ul>`);
    console.log('printULn ==>' + text);
}
printULn(test, 20);// ::32 let test = 'test'

// #gEFoxMMO
function printMassInUL(x){
    document.write(`<ul>`);
    for(const t of x ){
        document.write(`<li>${t}</li>`)
        console.log('printMassInUL ==>', t );
    }
    document.write(`</ul>`);
}

printMassInUL([1,2,-3,'true',true,false]);

// #bovDJDTIjt
function printDict(x){
    for(let t in x){
        document.write(`
            <div>
                <p>${t}  ::  ${x[t]}</p>
            </div> `);
        console.log('printDict==>' + t + ' x[t] = '+x[t]);
    }
}
let dict = {
    name: 'cuco',
    id: 22,
    age:232
}
printDict(dict);

//     #pghbnSB
function min(mass){
    let minIdx = 0;
    for(let i=1;i<mass.length;i++ ){
        if(mass[minIdx]> mass[i])minIdx = i;
    }
    return mass[minIdx];
}
console.log(min([1,0,-1,0,-500,3,4,5,6]));
// виправив помилку із мінімумом, було порівняння із самим minIdx, а не з mass[minIdx]

// #EKRNVPM
function sum(arr){
    let result =0;
    for( let t of arr){
        result+=t;
    }
    return result;
}
console.log(sum([2,2,2,2,-4,99,1]));

// #kpsbSQCt2Lf
function swap(arr,idx1,idx2){
    let t1 = arr[idx1];
    let t2 = arr[idx2];
    arr[idx1]= t2;
    arr[idx2] = t1;
    console.log(arr);
}
swap([1,2,3,4,5], 0, 4);

// #mkGDenYnNjn
function exchange(sumUAH,currencyValues,exchangeCurrency){
    let result;
    for(let x of currencyValues){
        if(x.currency=== exchangeCurrency) result = sumUAH/x.value;
    }
    return result;
}
let banknotes = [
    {currency:'USD', value:41},
    {currency:'EUR',value:44}];
console.log(exchange(10000,banknotes,'USD'));
//1