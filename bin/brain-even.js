import readlineSync from 'readline-sync'
import user from '/home/student/frontend-project-44/src/cli.js';
console.log("Welcome to the Brain Games!");
user()
const evenOrOdd = () => {
let result = 0
console.log('Answer "yes" if the number is even, otherwise answer "no".');
    while(result < 3){
        let random = (Math.trunc(Math.random()) * 10 || Math.trunc((Math.random()) * 100));
        console.log((`Question: ${random}`))
        let answer = readlineSync.question('Answer: ')
            if(random % 2 === 0 && answer === 'no' || random % 2 === 1 && answer === 'yes'|| answer !== 'yes' && answer !== 'no'){
            console.log(`'${answer}' is wrong answer ;(. Correct answer was no\nLet's try again, ${1}`);
            break
        }else{
            console.log('Correct');
            result += 1
        }
    }if(result === 3){
        console.log(`Congratulations, ${1}`);
    }
}

export default evenOrOdd