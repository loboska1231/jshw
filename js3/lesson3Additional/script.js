//task1
let mass1 = [1, 2, 3, 4, 5];
    console.log(mass1);
    let strMass = ['1', '2', '3', '4', '5'];
    console.log(strMass);
    let mixMass = [true, '2', 3, '4', 5];
    console.log(mixMass);
    let randomMass = [];
    randomMass[0] = 'bulba';
    randomMass[3] = 'bulba';
    randomMass[1] = 1312;
    randomMass[2] = 'bulba';
    console.log(randomMass);

//task2
let mass2 = [2,17,13,6,22,31,45,66,100,-18];
    //2.1
    let i = 0;
    while (i <= mass2.length - 1) {
        console.log(mass2[i]);
        i++;
    }
console.log('----------------------------------------------------');
//2.2
for(let i =0;i<=mass2.length-1;i++){
    console.log(mass2[i]);
}
console.log('----------------------------------------------------');
//2.3
i = 0;
    while (i <= mass2.length - 1) {
        console.log(mass2[i]);
        i+=2;
    }
console.log('----------------------------------------------------');
//2.4
for(let i =0;i<=mass2.length-1;i+=2){
    console.log(mass2[i]);
}
console.log('----------------------------------------------------');
//2.5
i = 0;
while (i <= mass2.length - 1) {
    if((i+1)%2===0)
        console.log(mass2[i]);
    i++;
}
console.log('------------------------------------1---------------');
//2.6
for(let i =0;i<=mass2.length-1;i++){
    (i+1)%2===0? console.log(mass2[i]):null;
}
console.log('----------------------------------------------------');
//2.7
{
    let mass2 = [2,17,13,6,22,31,45,66,100,-18];
    for (let i = 0; i <= mass2.length - 1; i++) {
        if (mass2[i] % 3 === 0) mass2[i] = 'okten';
    }
    console.log(mass2);
}

console.log('----------------------------------------------------');
//2.8
for(let i =mass2.length-1;i>=0;i--){
    console.log(mass2[i]);
}
console.log('2.9 task');
//2.9
//2.9.1
i = mass2.length - 1;
while (i >= 0) {
    console.log(mass2[i]);
    i--;
}
console.log('----------------------------------------------------');
//2.9.2
for(let i =mass2.length - 1;i>=0;i--){
    console.log(mass2[i]);
}
console.log('----------------------------------------------------');
//2.9.3
i = mass2.length - 1;
while (i >= 0) {
    console.log(mass2[i]);
    i-=2;
}
console.log('----------------------------------------------------');
//2.9.4
for(let i = mass2.length - 1;i>=0;i-=2){
    console.log(mass2[i]);
}
console.log('----------------------------------------------------');
//2.9.5
i = mass2.length - 1;
while (i >= 0) {
    if((i-1)%2===0)
        console.log(mass2[i]);
    i--;
}
console.log('------------------------------------1---------------');
//2.9.6
for(let i = mass2.length - 1;i>=0;i--){
    (i-1)%2===0? console.log(mass2[i]):null;
}
console.log('----------------------------------------------------');
//2.9.7
{
    let mass2 = [2,17,13,6,22,31,45,66,100,-18];
    for (let i = mass2.length - 1; i >= 0; i--) {
        if (mass2[i] % 3 === 0) mass2[i] = 'okten';
    }
    console.log(mass2);
}


