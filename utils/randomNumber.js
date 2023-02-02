function getRandomNumber(min,max){
    console.log(min,max)
    let randomNumber = Math.floor(Math.random() * max - min) + min;
    return randomNumber
}

module.exports =  getRandomNumber