import readlineSync from 'readline-sync'

const user = () => {
  var userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');
  return userName
}

export default user