// #I2XsG6f
TP = (a,b)=> a*b;
console.log(TP(5,5));

// #ETGAxbEn8l
Scircle = (r)=>3.14*r*r;
console.log(Scircle(5));

// #Mbiz5K4yFe7
Scilindre = (r,h)=>2*Scircle(r)+2*3.14*r*h;
console.log(Scilindre(5,2));

// #SIdMd0hQ
printMass = (...x)=> {
    for(let t of x) console.log(t);
}
let mass = [1,2,3,4,5];
printMass(mass);

// #59g0IsA
printP  = (text)=> document.write(`<p>${text}</p>`);
let test ='test_test';
printP('plus');
printP(test);

// #hOL6126
printUL = (text)=>{
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    //console.log('printULn ==> ', text )
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}
printUL(test);

// #0Kxco1edSN
printULn = (text, num)=>{
    if(num == null || num ===3 ){
        printUL(text);
    } else if( num <=0 || typeof num !== 'number'){
        throw Error(' num is less of equivalent 0 or typeOf num is not integer ')
    }
    else{
        document.write(`<ul>`);
        for(let i =0;i<num;i++){
            document.write(`<li>${text}</li>`);
            //console.log('printULn ==> ', text,'  - idx -  ',i );
        }
        document.write(`</ul>`);
    }
}
printULn(test, 10);
printULn(test, 2);
printULn(test);
//printULn(test, '1');
//printULn(test, 0);

// #gEFoxMMO
printMassInUL = (x)=>{
    document.write(`<ul>`);
    for(const t of x ){
        document.write(`<li>${t}</li>`)
        //console.log('printMassInUL ==> ', t);
    }
    document.write(`</ul>`);
}

printMassInUL([1,2,-3,'true',true,false]);
printMassInUL('21312');

// #bovDJDTIjt
printDict = (x)=>{
    for(let t in x){
        document.write(`
            <div>
                <p>${t}  ::  ${x[t]}</p>
            </div> `);
       // console.log('printDict ==> ', t, '  --  ', x[t]);
    }
}
let dict = {
    name: 'cuco',
    id: 22,
    age:232
}
printDict(dict);

//     #pghbnSB
min = (mass)=>{
    let minIdx = 0;
    for(let i=1;i<mass.length;i++ ){
        if(mass[minIdx]> mass[i])minIdx = i;
    }
    return mass[minIdx];

    // let min = mass[0];
    // for( let t of mass){
    //     if(min>t) min = t;
    // }
    // return min;
}
console.log(min([0,0,2,2,1,421,412,4,99919,-1,-500,-499]));

// #EKRNVPM
sum = (arr)=>{
    let result =0;
    for( let t of arr){
        result+=t;
    }
    return result;
}
console.log(sum([2,2,2,2,-4,99,1]));
//console.log(sum([2,2,2,2,-4,'99',1])); NaN



// #kpsbSQCt2Lf
swap = (arr,idx1,idx2)=>{
    let t1 = arr[idx1];
    let t2 = arr[idx2];
    arr[idx1]= t2;
    arr[idx2] = t1;
    console.log(arr);
}
swap([1,2,3,4,5], 0, 4);

// #mkGDenYnNjn
exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
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