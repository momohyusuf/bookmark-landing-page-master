import { useState } from 'react';
import {
  BsFillArrowDownSquareFill,
  BsFillArrowUpSquareFill,
} from 'react-icons/bs';
export default function FrequentlyAskedQuestions({ question, answer }) {
  const [isShown, setIsShown] = useState(false);

  function showAnswer() {
    setIsShown((prvalue) => !prvalue);
  }
  return (
    <section className="quetions-section">
      <article className="question-body">
        <div className="questions">
          <p>{question}</p>
          <button onClick={showAnswer}>
            {!isShown ? (
              <BsFillArrowDownSquareFill className="icon" />
            ) : (
              <BsFillArrowUpSquareFill className="icon" />
            )}
          </button>
        </div>
        {isShown && <p className="answer">{answer}</p>}
      </article>
    </section>
  );
}
