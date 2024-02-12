#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import generateRandomNumber from '../../src/index.js';

const algProgression = () => {
console.log('Welcome to the Brain Games!');
const name = user();
console.log('What number is missing in the progression?');
let correctAnswersCount = 0;

while (correctAnswersCount < 3) {
const startNumber = generateRandomNumber(1, 100);
const length = generateRandomNumber(11, 5);
const difference = generateRandomNumber(21, 1);
const progression = [];

let countOfProg = 0;
while (countOfProg !== length) {
progression.push(startNumber + countOfProg * difference);
countOfProg += 1;
}

const hiddenNumberIndex = generateRandomNumber(0, length - 1);
const question = [...progression];
question[hiddenNumberIndex] = '..';
console.log(`Question: ${question.join(' ')}`);
const answer = readlineSync.question('Your answer: ');

const correctAnswer = progression[hiddenNumberIndex];

if (parseInt(answer, 10) !== correctAnswer) {
console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
console.log(`Let's try again, ${name}!`);
return;
}

correctAnswersCount++;
console.log('Correct!');
console.log('Next question...');
}

console.log(`Congratulations, ${name}!`);
};

algProgression();
