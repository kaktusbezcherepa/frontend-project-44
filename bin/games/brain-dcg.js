#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';

const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

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
    let min;
    let max;
    let correctAnswer;

    if (num1 > num2) {
      max = num1;
      min = num2;
    } else {
      max = num2;
      min = num1;
    }

    for (let i = min; i >= 1; i--) {
      if (max % i === 0 && min % i === 0) {
        correctAnswer = i;
      }
    }

    if (parseInt(answer, 10) !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

dcg();
