import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
function App() {
  const sets = [
    {
      name: "Set Name",
      numCards: 10
    },
    {
      name: "Set Name",
      numCards: 4
    },
    {
      name: "Set Name",
      numCards: 6
    },
  ]

  return (
    <main className="d-flex flex-column">
      <Header />

      <Home sets={sets} />

      <Footer />
    </main>
  )
}

export default App
