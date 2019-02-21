function factorial(facto) {

  let fact = 1;
  for (let i=1 ; i<= facto; i++){

      fact=fact*i;

  }

  return fact;
}


let helloNumber=parseInt(prompt("choisissez un nombre positif"));


console.log(`resultat : ${factorial(helloNumber)}`);

//factorial(5)
