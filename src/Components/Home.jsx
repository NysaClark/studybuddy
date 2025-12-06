const Home = ({sets}) => {
  return (
    <div className='d-flex flex-column align-items-center py-3 px-4'>
        <div className="home-card bg-white rounded-2 d-flex flex-row align-items-center p-4">
            <div id="left" className="d-flex flex-column align-items-center ">
                <p className="text-center mb-4">Create your own flashcards</p>
                <button className="btn btn-primary py-2 px-3 rounded-5">Create flashcards</button>
            </div>
            <div className="d-none d-md-flex flex-column align-items-center w-50">
                <img className="mw-100" src="flashcards.png"  />
            </div>
        </div>

        <div className="container-fluid py-4">
          <h2 className="fs-4">Flashcard Sets</h2>

          {sets?.length ? sets.map((set, index) => {
            return (
              <></>
            )
          }) 
          : 
            <div className="py-4 d-flex flex-column align-items-center">
              <h3 className="text-center fw-bold">You have not created any flashcard sets</h3>
              <button className="btn btn-primary mt-3 py-2 px-3 rounded-5">Create one now</button>
            </div>
          }

        </div>
    </div>
  )
}

export default Home