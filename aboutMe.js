'use strict';

alert ('I\'m Alive!');
function userName1() {
  let userName =prompt('What is your name?');
  console.log(userName);

  alert('Welcome, ' + userName + ' It\'s nice to meet you!');

  alert('Let\'s see how well you know me ' + userName + '!');
}
//whats my name
function whoami1(){
  let whoAmI = prompt('Do you know my name? Please enter yes or no.');
  console.log(whoAmI);


  if (whoAmI === 'yes'){
    alert('Of course you do!');
  } else {
    alert('Look at my video and you\'ll see it!');
  }
}
//what is my hobby
function hobby(){
  let myHobby = prompt('Do you know my favorite hobby? yes or no?');
  console.log(myHobby);

  if (myHobby === 'yes'){
    alert('Tell me!');
  } else {
    alert('Guess!');
  }
}
//am i married
function married1(){
  let married = prompt('Am I married? yes or no?');
  console.log(married);

  if (married === 'yes'){
    alert('Correct I have been married for over 3 years!');
  } else {
    alert('Incorrect I am married!');
  }
}
// do i have a child
function kid(){
  let kiddos = prompt('Do I have any kiddos? yes or no?');
  console.log(kiddos);

  if (kiddos === 'yes'){
    alert('You are correct I have a ten year old son!');
  } else {
    alert('You are wrong I do have a kiddo!');
  }
}
//travel
function travel1(){
  let travel = prompt('Do you know how many countries I have traveled to? yes or no?');
  console.log(travel);

  if (travel === 'yes'){
    alert('How could you possibly know that?');
  } else {
    alert('Well let me tell you, eleven countries and counting.');
  }
}
//where do i work
function work1(){
  let work = prompt('Do you know where I work? yes or no?');
  console.log(work);

  if (work === 'yes'){
    alert('You know too much about me!');
  } else {
    alert('I work for Apple');
  }
}
function guessAge(){
  //start loop here most guesses is 5 if user gets correct answer stop asking
  let age ='39';
  let stop=false;
  let guesses = 5; 
  while (guesses > 0 && stop === false){
    let myAge = prompt('How old am I? Enter a number.');
    console.log(myAge);
    if (myAge === age){
      alert('You are correct!'); //they got it right stop the loop
      stop = true;
    }
  
    else if (myAge < age){
      alert('you are too kind but I\'m older than that. Try again!');
    }
  
    else if (myAge > age){
      alert('Not that old yet! Try again!');
    }
    guesses --;
  }
//We need to give user 5 guesses
}
// Array
let country = ['Canada', 'Mexico', 'Cuba', 'Puerto Rico', 'Grand Caymen Islands', 'Panama', 'Japan', 'China', 'Korea', 'Kuwait', 'Iraq'];
let guesses = 5;

let correctGuess = false;
//country guess
function countryguess(){
  while (guesses > 0 && correctGuess === false) {
    let userGuess =  prompt('Name a country I\'ve visited outside of the USA.');
    console.log(guesses, 'user guess');

    for (let index = 0; index < country.length; index++){
      console.log(country[index], 'this is the country at ', index);
      if (userGuess === country[index]) {
        console.log('correct');
        alert('You are right!');
        correctGuess = true;
      }
    }
    if (correctGuess === false) {
      alert('You are wrong, try again!');
    }
    guesses--;
  }
}
userName1();
whoami1();
hobby();
married1();
kid();
travel1();
work1();
countryguess();
guessAge();
