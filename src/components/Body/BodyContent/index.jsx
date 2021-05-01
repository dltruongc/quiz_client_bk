import React, { useEffect, useState } from "react";
import Quiz from "../../Quiz";
import "./BodyContent.scss";
import rawData from "./raw_data";

export default function BodyContent() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setTimeout(setQuizzes(rawData), 2000);
  }, [quizzes]);

  const listItems = () => {
    return quizzes.map((quiz, i) => {
      return (
        <Quiz key={i} quiz={quiz} />
      );
    });
  };

  return (
    <div className='body_content'>
      <div className='items'>{listItems()}</div>
    </div>
  );
}
