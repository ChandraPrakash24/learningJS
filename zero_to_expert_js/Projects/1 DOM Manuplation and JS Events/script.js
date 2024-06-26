'use strict';

// DOM Manuplation

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score').textContent = 10;

// document.querySelector('.number').textContent = 13;

// document.querySelector('.guess').value = 23;


// EVENTS

let number = Math.floor(Math.random() * 20) +  1;
let score = 20;
let highScore = 0;

const getMessage = function(message){
    document.querySelector('.message').textContent = message;
}

// console.log(number);

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // console.log(guess, typeof guess);

    if(!guess){
        // document.querySelector('.message').textContent = '🛑 No Number';
        getMessage('🛑 No Number');
    } else if(guess !== number){ // refactoring below two if-else

        // document.querySelector('.message').textContent = guess > number ? '📈 Too High' : '📉 Too Low';
        getMessage(guess > number ? '📈 Too High' : '📉 Too Low');
        if(score > 1) {
            document.querySelector('.score').textContent = --score;
            } else {
                // document.querySelector('.message').textContent = '💥 You Lost the game';
                getMessage('💥 You Lost the game');
                document.querySelector('.number').textContent = number;
                document.querySelector('.score').textContent = 0;
                document.querySelector('body').style.backgroundColor = '#d73737';

            }

    }
    // else if(guess > number) {
    //     document.querySelector('.message').textContent = '📈 Too High';
    //     if(score > 1) {
    //     document.querySelector('.score').textContent = --score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You Lost the game';
    //         document.querySelector('.number').textContent = number;
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = '#d73737';

    //     }
    // } else if(guess < number) {
    //     document.querySelector('.message').textContent = '📉 Too Low';
    //     if(score > 1) {
    //         document.querySelector('.score').textContent = --score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You Lost the game';
    //         document.querySelector('.number').textContent = number;
    //         document.querySelector('.score').textContent = 0;
    //         document.querySelector('body').style.backgroundColor = '#d73737';

    //     }
    // }
    else if(guess === number){
        document.querySelector('.score').textContent = --score;
        document.querySelector('.number').textContent = number;
        if(score > highScore) {
            document.querySelector('.highscore').textContent = highScore=score+1;
        }
        // document.querySelector('.message').textContent = '🎉 You Win';
        getMessage('🎉 You Win');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.check').disabled = true;
    }
});

// again btn
document.querySelector('.again').addEventListener('click', () => {
    document.querySelector('.score').textContent= 20;
    score=20;
    document.querySelector('.number').textContent= '?';
    number = Math.floor(Math.random() * 20) +  1;
    console.log(number);
    document.querySelector('body').style.backgroundColor = '#222';
    // document.querySelector('.message').textContent= 'Start guessing...';
    getMessage('Start guessing...');
    document.querySelector('.guess').value= '';
    document.querySelector('.check').disabled = false;
});
