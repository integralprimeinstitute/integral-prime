import {useState, useEffect} from "react"
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Preloader from "./components/common/Preloader"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() =>{
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer);
  }, [])

  if(loading) return <Preloader/>

  return (
    <Layout>
      <Home/>
    </Layout>
  )
}

export default App
