//1. Melakukan Looping Menggunakan While

var loop1 = 2
var loop2 = 20

console.log('LOOPING PERTAMA')
while (loop1 <= 20){
    console.log(loop1 + ' - I love coding')
    loop1 += 2
}

console.log('LOOPING KEDUA')
while(loop2 >= 2){
    console.log(loop2 + ' - I will become fullstack developer')
    loop2 -= 2
}


//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA')
for (var i=1; i<=20; i++){
    console.log(i + ' - I love coding')
}

console.log('LOOPING KEDUA')
for (var j=20; j>=1; j--){
    console.log(j + ' - I will become fullstack developer')
}

//3. Angka Ganjil dan Genap

//Ganjil Genap
for (var i=1; i<=100; i++){
    if(i % 2 == 0){
        console.log('Genap')
    }else{
        console.log('Ganjil')
    }
}
  
//Kelipatan 3 dari Pertambahan 2
for (var j=1; j<=100; j+=2){
    if(j % 3 == 0){
        console.log(j + ' KELIPATAN 3')
    }
}
  
//Kelipatan 6 dari Pertambahan 5
for (var k=1; k<=100; k+=5){
    if(k % 6 == 0){
        console.log(k + ' KELIPATAN 6')
    }
}
  
//Kelipatan 10 dari Pertambahan 9
for (var l=1; l<=100; l+=9){
    if(l % 9 == 0){
        console.log(l + ' KELIPATAN 10')
    }
}