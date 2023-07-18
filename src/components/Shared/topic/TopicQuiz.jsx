import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "./Question";

const TopicQuiz = () => {
  const topic = useLoaderData();
  const datas = topic.data;
  const questions = datas.questions;
  // console.log(questions);
  return (
    <div className="gap-2 grid grid-cols-2 justify-center items-center h-1/2 m-2 ">
      {questions.map((q, index) => (
        <Question key={q.id} index={index} q={q} />
      ))}
    </div>
  );
};

export default TopicQuiz;
