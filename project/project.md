 # Project related to DOM
 
 ## link of project
 [click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

 ## Solutions ----

 ## 1.

```javascript

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach( (button)=>{
  button.addEventListener('click', (e)=>{
    console.log(e.target.id);
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id;
    }

  })
})

```


## 2.

```javascript

// const h=parseInt(document.querySelector('#height').innerHTML.value);
// const wt=parseInt(document.querySelector('#weight').innerHTML.value);

// we can't provide outside cause after submit it will referesh page give empty value.

// console.log(h);
// console.log(wt);

const form=document.querySelector('form');
const res=document.querySelector('#results');

form.addEventListener('submit',(e)=>{
  e.preventDefault();

  const h=parseInt(document.querySelector('#height').value);
  const wt=parseInt(document.querySelector('#weight').value)

  if(h=='' || h<0 || isNaN(h)){
    res.innerHTML='please provide valid height'
  }
  else if(wt=='' || wt<0 || isNaN(wt)){
    res.innerHTML='please provide valid weight'
  }
  else{
    const bmi=(wt/((h*h)/10000)).toFixed(2);
    // res.innerHTML=`<span>${bmi}</span`
    if(bmi<18.6){
      res.innerHTML=`<span> ${bmi} : Under weight</span>`
    }
    else if(bmi>24.9){
      res.innerHTML=`<span> ${bmi} : OverWeight</span>`
    }
    else{
      res.innerHTML=`<span> ${bmi} : Normal Range</span>`
    }
  }
 
})

```




## 3.

```javascript

const clock=document.querySelector('#clock');

// let date=new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
  let date=new Date();
  clock.innerHTML=date.toLocaleTimeString();
},1000)

// har ek second baad ye code chalta rahega


```



## 4.

```javascript 

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const pGuess = document.querySelector('.guesses');
const left = document.querySelector('.lastResult');

const res = document.querySelector('.lowOrHi');
const resBody = document.querySelector('.resultParas');

let prev = [];
let count = 1;
let playGame = true;

let randomNum = parseInt(Math.random() * 100 + 1);
console.log(randomNum);

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (guess == '' || guess < 1 || guess > 100 || isNaN(guess)) {
    displayMsg(`Enter a valid input`);
  } else {
    prev.push(guess);
    if (count > 10) {
      operation(guess);
      displayMsg(`you reached your guessed limit`);
      endGame();
    } else {
      operation(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`you guessed it`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg(`Num is too low`);
  } else if(guess >randomNum){
    displayMsg(`Num is too high`);
  }
}

function operation(guess) {
  userInput.value = '';
  pGuess.innerHTML += `${guess}, `;
  left.innerHTML = `${10 - count}`;
  count++;
}

function displayMsg(msg) {
  res.innerHTML = `<h2>${msg}</h2>`;
}

const p = document.createElement('p');

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('input');
  p.innerHTML = `<h2 id='newGame'>Start Over</h2>`;
  resBody.appendChild(p);
  playGame = false;

  startGame();
}

function startGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', (e) => {
    randomNum = parseInt(Math.random() * 100 + 1);
    userInput.innerHTML = '';
    prev = [];
    pGuess.innerHTML = '';
    left.innerHTML = 10;
    res.innerHTML = '';
    userInput.removeAttribute('disabled');
    resBody.removeChild(p);
    playGame = true;
  });
}


```








