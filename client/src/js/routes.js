const HomePage = require('./pages/homePage/homePage');
const ContactsPage = require('./pages/contactsPage/contactsPage');
const TeamPage = require('./pages/teamPage/teamPage');
const FourOhFour = require('./pages/404Page/404Page');
const DemoPage = require('./pages/demoPage/demoPage');
const ReminderPage = require('./pages/reminderPage/reminderPage');
const CategoryPage = require('./pages/categoryPage/categoryPage');
const QuizListPage = require('./pages/quizListPage/quizListPage');
const RewardsPage = require('./pages/rewardsPage/rewardsPage');
const ScreensaverPage = require('./pages/screensaverPage/screensaverPage');
const QuizResultPage = require('./pages/quizResultPage/quizResultPage')


module.exports = {
 '/': HomePage,
 'contacts': ContactsPage,
 'team': TeamPage,
 '404': FourOhFour,
 'demo': DemoPage,
 'reminder': ReminderPage,
 'category': CategoryPage,
 'quizList': QuizListPage,
 'rewards': RewardsPage,
 'quizResult': QuizResultPage,
 'screensaver': ScreensaverPage,
 };
