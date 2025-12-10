const Home = ({ sets }) => {
  return (
    <div className="d-flex flex-column align-items-center py-3 px-4 flex-grow-1">
      <div className="home-card bg-white rounded-2 d-flex flex-row align-items-center p-4">
        <div id="left" className="d-flex flex-column align-items-center ">
          <p className="text-center mb-4">Create your own flashcards</p>
          <a href="/create">
            <button className="btn btn-primary py-2 px-3 rounded-5">
              Create flashcards
            </button>
          </a>
        </div>
        <div className="d-none d-md-flex flex-column align-items-center w-50">
          <img className="mw-100" src="flashcards.png" />
        </div>
      </div>

      <div className="container-fluid py-3">
        <h2 className="fs-4">Flashcard Sets</h2>

        {sets.length ? (
          <div className="d-flex flex-column gap-3 py-3">
           
            {/* <div className="d-flex justify-content-between">
              <div className="d-flex justify-content-between px-3 align-items-center gap-3 py-3 bg-white rounded-2">
                <input className=" border-0 " placeholder="Search..." />
                <svg
                  id="searchIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </div>

              <div className="">
                <select className="h-100 border-0" name="filter" id="filter">
                  <option value="recent">Recent</option>
                  <option value="old">Old</option>
                </select>
              </div>
            </div> */}

            {sets.map((set, index) => {
              return (
                <a href={`/${index}`}>
                  <div
                    key={index}
                    className="d-flex px-3 py-3 align-items-center justify-content-between bg-white rounded-2"
                  >
                    <h3 className="fs-5">{set.name}</h3>
                    <p>{set.numCards} Flashcards</p>
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div className="pt-5 d-flex flex-column align-items-center">
            <h3 className="text-center fw-bold">
              You have not created any flashcard sets
            </h3>
            <a href="/create">
              <button className="btn btn-primary mt-3 py-2 px-3 rounded-5">
                Create one now
              </button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
