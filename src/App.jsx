import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import CommunityBox from './Component/MainPage/CommunityBox/CommunityBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      < CommunityBox />
    </div>
  )
}

export default App
