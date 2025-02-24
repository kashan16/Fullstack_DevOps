import './App.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import { AuthProvider } from './contexts/AuthContext';
import { BlogProvider } from './contexts/BlogContext';
import AppRouter from './router';

function App() {
  return (
    <AuthProvider>
      <BlogProvider>
        <Navbar />
        <ThemeToggle />
        <main className="container mx-auto p-4">
          <AppRouter />
        </main>
      </BlogProvider>
    </AuthProvider>
  );
}

export default App;
