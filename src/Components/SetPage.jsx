import React, { useState } from "react";

const SetPage = ({ set }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const handlePrev = () => {
    setCurrIndex(currIndex - 1);
    setShowQuestion(true);
  };

  const handleNext = () => {
    setCurrIndex(currIndex + 1);
    setShowQuestion(true);
  };

  const handleEditSave = (edit, setEdit) => {
    if (edit) {
      // TODO change answer & qusetion on edit save
      setEdit(!edit);
    } else {
      setEdit(!edit);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center py-3 px-4 flex-grow-1">
      <h2 className="w-100 fs-4">{set.title}</h2>
      <div className="container d-flex flex-column align-items-center justify-content-center gap-3 px-2 py-4">
        <div
          id="card"
          onClick={() => setShowQuestion(!showQuestion)}
          className="d-flex bg-white rounded-2 align-items-center justify-content-center "
        >
          <p className="d-flex align-items-center justify-content-center text-center w-100 h-100 overflow-auto">
            {showQuestion
              ? set.flashcards[currIndex].question
              : set.flashcards[currIndex].answer}
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3">
          <button
            className="btn btn-primary rounded-5 py-1 px-3 d-flex align-items-center justify-content-center"
            disabled={currIndex == 0}
            onClick={() => handlePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-left-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
              />
            </svg>
          </button>
          <p className="fw-bold">
            {currIndex + 1}/{set.flashcards.length}
          </p>
          <button
            className="btn btn-primary rounded-5 py-1 px-3 d-flex align-items-center justify-content-center"
            disabled={currIndex == set.flashcards.length - 1}
            onClick={() => handleNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-right-short"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-3 pb-3">
        <h3 className="w-100 fs-5">
          Flashcards {`(${set.flashcards.length})`}{" "}
        </h3>
        {set.flashcards.map((card, index) => {
          const [edit, setEdit] = useState(false);
          return (
            <div
              key={index}
              className="flashcard bg-white w-100 pt-2 px-2 rounded-2"
            >
              <div className="d-flex w-100 align-items-center pb-1 justify-content-end gap-2">
                <button
                  className="btn"
                  onClick={() => handleEditSave(edit, setEdit)}
                >
                  {edit ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-check2 text-secondary"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-pen text-secondary"
                      viewBox="0 0 16 16"
                    >
                      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                    </svg>
                  )}
                </button>
                <button className="btn text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-trash3 text-secondary"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </button>
              </div>
              <div className="card-row d-flex px-3 gap-3">
                {/* TODO change to input if edit==true */}
                <div className="w-50 question">{card.question}</div>
                <div className="w-50 answer">{card.answer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SetPage;
