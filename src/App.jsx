import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import SetPage from "./Components/SetPage"
function App() {
  const sets = [
    {
      title: "Set Title",
      flashcards:[
        {
          question: "Question 1 Content",
          answer: "Answer 1 Content"
        },
        {
          question: "Question 2 Content",
          answer: "Answer 2 Content"
        },
        {
          question: "Question 3 Content",
          answer: "Answer 3 Content"
        },
        {
          question: "Question 4 Content",
          answer: "Answer 4 Content"
        },
      ]
    },
    {
      title: "Set Title",
      flashcards:[
        {
          question: "Question 1 Content",
          answer: "Answer 1 Content"
        }
      ]
    },
    {
      title: "Set Title",
      flashcards:[
        {
          question: "Question 1 Content",
          answer: "Answer 1 Content"
        },
      ]
    },
  ]

  return (
    <main className="d-flex flex-column">
      <Header />

      {/* <Home sets={sets} /> */}
      <SetPage set={sets[0]} />

      <Footer />
    </main>
  )
}

export default App
