import Navbar from './cmps/Navbar'
import Header from './cmps/Header'
import Footer from './cmps/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Header />
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}

export default App