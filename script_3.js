
let user_pyramid=parseInt(prompt("choisissez un nombre positif"))


  for(let i=1; i<= user_pyramid; i++){

    let str = ' '.repeat(user_pyramid-i);
    let str2 = '#'. repeat(i*2-1)

    console.log(str + str2 );
  }
