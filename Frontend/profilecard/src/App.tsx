import './App.css'
import Profile from './components/Profile'
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <div>
      <AuthProvider>
        <ThemeProvider>
          <Profile />
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
