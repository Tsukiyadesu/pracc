let number;
let isprimenum = true; 

number = Math.floor(Math.random()*100)

if(number < 3 ||number > 500) console.error('a random szam < 3 || > 500')


function isPrime(number){
   if (number === 1 ){
     isprimenum = false 
    }
    
     else  if (number > 1) {
        for(let i = 2; i< number; i++){
            if (number % i == 0) isprimenum= false
        }
     }
  
    switch (isprimenum){
        case false:
            console.log(`is ${number} a prime number: ${isprimenum}`)
            break;
        case true:
            console.log(`is ${number} a prime number: ${isprimenum}`)
            break
    }


}

isPrime(number)