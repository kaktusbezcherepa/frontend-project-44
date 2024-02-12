#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import {
  generateRandomNumber, isPrime, wrongAnswer } from '../../src/index.js';

const isPrimeGame = () => {
  const name = user()
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNum = generateRandomNumber(1, 300);
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Answer: ');

    const isPrimeNumber = isPrime(randomNum);
    const correctAnswer = isPrimeNumber ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      wrongAnswer(answer, correctAnswer, name);

      return;
    }
  }
};

isPrimeGame();
