'use strict';

alert ('I\'m Alive!');

let userName =prompt('What is your name?');
console.log(userName);

let whoAmI = prompt('Do you know my name? Please enter yes or no');
console.log(whoAmI);


if (whoAmI === 'yes'){
  alert('Of course you do!');
} else {
  alert('Look at my video and you\'ll see it');
}


let howOldAmI = prompt('Do you know my age? yes or no?');
console.log(howOldAmI);

if (howOldAmI === 'yes'){
  alert('Tell me!');
} else {
  alert('Guess');
}

let married = prompt('Am I married? yes or no?');
console.log(married);

if (married === 'yes'){
  alert('Correct I have been married for over 3 years');
} else {
  alert('Incorrect I am married');
}

let kiddos = prompt('Do I have any kiddos? yes or no?');
console.log(kiddos);

if (kiddos === 'yes'){
  alert('You are correct I have a ten year old son!');
} else {
  alert('You are wrong I do have a kiddo');
}
let travel = prompt('Do you know how many countries I have traveled to? yes or no?');
console.log(travel);

if (travel === 'yes'){
  alert('How could you possibly know that?');
} else {
  alert('Well let me tell you, eleven countries and counting.');
}

let work = prompt('Do you know where I work? yes or no?');
console.log(work);

if (work === 'yes'){
  alert('You know too much about me!');
} else {
  alert('I work for Apple');
}
