#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import { generateRandomNumber, wrongAnswer } from '../../src/index.js';

const dcg = () => {
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

    wrongAnswer(answer, correctAnswer, name);

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`)
};

dcg();
