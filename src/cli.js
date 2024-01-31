import readlineSync from 'readline-sync'

const user = () => {
  let name = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + name + '!');
}

export default user