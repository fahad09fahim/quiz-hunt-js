import React from "react";

const Question = ({ q, index }) => {
  const { question, options, correctAnswer } = q;
  console.log(q);
  const handleAnwser = (option) => {
    if (option === correctAnswer) {
      alert("your Ans is Right");
    } else {
      alert("your Ans is wrong");
    }
  };

  return (
    <div className="border-2  rounded-lg border-stone-500  bg-white h-52">
      <div className="flex p-2">
        <h4>Quiz:{index + 1}</h4>
        {question}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2  h-24 gap-2">
        {options.map((option, index) => (
          <button
            className=" rounded-full bg-sky-300 p-2  text-sm font-medium hover:bg-sky-100  "
            index={index}
            option={option}
            onClick={() => handleAnwser(option)}
          >
            {index + 1}
            {"."} {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
