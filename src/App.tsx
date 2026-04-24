import { Route, Router } from '@solidjs/router';
import './App.css';
import { Toaster } from 'solid-sonner';
import BugDetail from './components/BugDetail';
import BugGrid from './components/BugGrid';
import DarkModeToggle from './components/DarkModeToggle';
import NotFound from './components/NotFound';
import ProgressBar from './components/ProgressBar';
import Quiz from './components/Quiz';

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Router
        root={(props) => (
          <div class="app-shell">
            <header class="app-header">
              <a href="/" class="app-logo">
                Its Not Scary!
              </a>
              <div class="app-header-right">
                <ProgressBar />
                <DarkModeToggle />
              </div>
            </header>
            <main class="app-main">{props.children}</main>
            <footer class="app-footer">
              <p>Made with 💚 to show that bugs are our friends!</p>
              <p>
                Its Not Scary &reg |{' '}
                <a
                  href="https://github.com/ableinc/bugs-are-not-scary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{' '}
                |{' '}
                <a
                  href="https://linkedin.com/in/jaylen-douglas-292b82a6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </footer>
          </div>
        )}
      >
        <Route path="/" component={BugGrid} />
        <Route path="/bug/:id" component={BugDetail} />
        <Route path="/quiz" component={Quiz} />
        <Route path="*" component={NotFound} />
      </Router>
    </>
  );
}
