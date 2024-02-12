#!/usr/bin/env node
import readlineSync from 'readline-sync';
import user from '../../src/cli.js';
import { generateRandomNumber } from '../../src/index.js';

const calculate = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return NaN;
  }
};

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = user();
  console.log('What is the result of the expression?');

  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const number1 = generateRandomNumber(1, 50);
    const number2 = generateRandomNumber(1, 50);
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    const expression = `${number1} ${operator} ${number2}`;
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = calculate(number1, operator, number2);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

brainCalc();
