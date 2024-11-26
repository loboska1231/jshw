// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let mass = [];
for (let i = 0; i < 100; i++) {
    mass.push(i+1);
}
console.log(mass);
let a =0,b=10;
let div = document.createElement('div');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function (){
    div.innerHTML = '';
   if(b>100) throw Error('err');
   else {
       for(let i =a; i<b;i++){
           let p = document.createElement('p');
           p.innerText = mass[i];
           div.append(p);
       }
       a+=10;
       b+=10;
   }
}
prev.onclick = function (){
    div.innerHTML = '';
    if(a<0) throw Error('err');
    else{
        a-=10;
        b-=10;
        for(let i =a; i<b;i++){
            let p = document.createElement('p');
            p.innerText = mass[i];
            div.append(p);
        }
    }

}
document.body.append(div);