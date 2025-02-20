import './App.css'
import Profile from './components/Profile'
import { ThemeProvider } from './contexts/ThemeContext'

function App() {
  return (
    <div>
      <ThemeProvider>
      <Profile/>
      </ThemeProvider>
    </div>
  )
}

export default App
