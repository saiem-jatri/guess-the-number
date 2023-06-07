'use strict';

const message = document.querySelector('.message')
const number = document.querySelector('.number')

const check = document.querySelector('.check')
const again = document.querySelector('.again')
let score = 20;
let highscore = 0;
let randomNumber = Math.trunc(Math.random()*20)+1
const displayMessage=(message)=>{
    document.querySelector('.message').textContent = message
}

check.addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ No number!';  
          }else if( guess === randomNumber){
            document.querySelector('.message').textContent = '⛔️ Win!';
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(score > highscore){
                highscore = score;
                document.querySelector('.highscore').textContent = score
            }
          }else if(guess !== randomNumber){
            if( score > 1){
                displayMessage(guess > randomNumber ? 'To High!' : 'Too Low!')
                score--
                document.querySelector('.score').textContent = score;
            }else{
                displayMessage('you lost the game!')
                document.querySelector('.score').textContent = 0
            }
          }
})

again.addEventListener('click',function(){
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#000';
    document.querySelector('.number').style.width = '10rem';
    document.querySelector('.number').style.height = '10rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent = '?'
    score = 20
    document.querySelector('.score').innerHTML = score
    console.log("===>",score)
    document.querySelector('.highscore').textContent = highscore
})