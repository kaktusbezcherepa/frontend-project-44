#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import generateRandomNumber from '../../src/index.js';

const dcg = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const num1 = generateRandomNumber(1, 100);
    const num2 = generateRandomNumber(1, 100);
    console.log(`Question: ${num1} ${num2}`);
    const answer = readlineSync.question('Your answer: ');

    let a = num1;
    let b = num2;
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    const correctAnswer = a;

    if (parseInt(answer, 10) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    correctAnswersCount += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

dcg();
