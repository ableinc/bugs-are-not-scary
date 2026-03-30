import { Route, Router } from '@solidjs/router';
import './App.css';
import BugDetail from './components/BugDetail';
import BugGrid from './components/BugGrid';
import DarkModeToggle from './components/DarkModeToggle';
import ProgressBar from './components/ProgressBar';
import Quiz from './components/Quiz';

export default function App() {
  return (
    <Router
      root={(props) => (
        <div class="app-shell">
          <header class="app-header">
            <a href="/" class="app-logo">
              🐛 Bugs Are Not Scary!
            </a>
            <div class="app-header-right">
              <ProgressBar />
              <DarkModeToggle />
            </div>
          </header>
          <main class="app-main">{props.children}</main>
          <footer class="app-footer">
            <p>Made with 💚 to show that bugs are our friends!</p>
          </footer>
        </div>
      )}
    >
      <Route path="/" component={BugGrid} />
      <Route path="/bug/:id" component={BugDetail} />
      <Route path="/quiz" component={Quiz} />
      <Route path="*" component={BugGrid} />
    </Router>
  );
}
