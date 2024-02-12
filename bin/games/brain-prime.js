#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import generateRandomNumber from '../../src/index.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isPrimeGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
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
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

isPrimeGame();
