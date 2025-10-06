import { useState } from 'react'
import './styles/index.css'
import Header from './components/header'
import Content from './components/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Content />
      </main>
    </div>
  )
}

export default App
