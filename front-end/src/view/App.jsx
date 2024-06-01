import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

export default function App() {
  return (
  <div className="flex flex-col h-screen bg-primary-400">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  )
}
