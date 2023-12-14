const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const questions = [
  'What\'s your name? Nicknames are also acceptable :) ',
  'What\'s an activity you like doing? ',
  'What do you listen to while doing that? ',
  'Which meal is your favourite (eg: dinner, brunch, etc.)? ',
  'What\'s your favourite thing to eat for that meal? ',
  'Which sport is your absolute favourite? ',
  'What is your superpower? In a few words, tell us what you are amazing at! '
];

let questionNumber = 0;

const askQuestion = () => {
  rl.question(questions[questionNumber], (answer) => {
    profile[`Answer${questionNumber + 1}`] = answer;

    if (questionNumber < 6) {
      questionNumber++;
      askQuestion();
    } else {
      displayProfile();
      rl.close();
    }
  });
};

const displayProfile = () => {
  const profileText = `${profile.Answer1} loves ${profile.Answer3} while ${profile.Answer2}, devouring ${profile.Answer5} for ${profile.Answer4}, prefers ${profile.Answer6} over any other sport, and is amazing at ${profile.Answer7}.`;
  
  console.log('\n--- Your Profile ---');
  console.log(profileText);
};

askQuestion();
