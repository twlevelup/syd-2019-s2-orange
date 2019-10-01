const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const DemoPage = require('./pages/demoPage/demoPage');
const ReminderPage = require('./pages/reminderPage/reminderPage');
const CategoryPage = require('./pages/categoryPage/categoryPage');
const QuizListPage = require('./pages/quizListPage/quizListPage');
const CongratsPage = require('./pages/congratsPage/congratsPage')

module.exports = {
 '/': HomePage,
 'contacts': ContactsPage,
 'team': TeamPage,
 '404': FourOhFour,
 'demo': DemoPage,
 'reminder': ReminderPage,
 'category': CategoryPage,
 'quizList': QuizListPage,
 'congrats': CongratsPage,
};
