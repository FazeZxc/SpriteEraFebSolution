// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRecoilState } from "recoil";
// import { answerAtom, timeTakenAtom } from "../atoms/answers";

// export function QuestionTemplate({ content }) {
//   const [selectedAnswers, setSelectedAnswers] = useRecoilState(answerAtom);
//   const [quizEnded, setQuizEnded] = useState(false);
//   const [timerActive, setTimerActive] = useState(true);
//   const navigate = useNavigate();
//   const initialTime = 5 * 60;
//   const [timeRemaining, setTimeRemaining] = useState(initialTime);
//   const [timeTaken, setTimeTaken] = useRecoilState(timeTakenAtom);

//   function handleOptionChange(questionId, selectedValue) {
//     setSelectedAnswers((prevAnswers) => {
//       const updatedAnswers = [...prevAnswers];
//       updatedAnswers[questionId - 1] = selectedValue;
//       return updatedAnswers;
//     });
//   }

//   function Timer() {
//     useEffect(() => {
//       let timerInterval;

//       if (timerActive && timeRemaining > 0) {
//         timerInterval = setInterval(() => {
//           setTimeRemaining((prevTime) => prevTime - 1);
//         }, 1000);
//       } else if (timeRemaining === 0) {
//         setTimerActive(false);
//         navigate("/page3");
//       }

//       return () => clearInterval(timerInterval);
//     }, [timerActive, timeRemaining]);

//     function formatTime(seconds) {
//       const minutes = Math.floor(seconds / 60);
//       const remainingSeconds = seconds % 60;
//       return `${String(minutes).padStart(2, "0")}:${String(
//         remainingSeconds
//       ).padStart(2, "0")}`;
//     }

//     return (
//       <div>
//         <h1>Timer: {formatTime(timeRemaining)}</h1>
//       </div>
//     );
//   }

//   function submitHandler(e) {
//     e.preventDefault();
//     console.log(selectedAnswers);
//     console.log("submitted");
//     console.log("Quiz Ended");
//     setTimerActive(false);
//     navigate("/page3");
//     setTimeTaken(initialTime - timeRemaining);
//   }

//   return (
//     <div>
//       <Timer></Timer>
//       <form onSubmit={submitHandler}>
//         {content.map((item) => {
//           return (
//             <div key={item.id}>
//               <h1>
//                 Q{item.id}. {item.question}{" "}
//               </h1>
//               {item.options.map((option, index) => (
//                 <div key={index}>
//                   <input
//                     type="radio"
//                     id={`selected_answer_${index + 1}_id${item.id}`}
//                     name={`selected_answer${item.id}`}
//                     value={option}
//                     onChange={() => handleOptionChange(item.id, option)}
//                   />
//                   <label htmlFor={`selected_answer_${index + 1}_id${item.id}`}>
//                     {option}
//                   </label>
//                   <br />
//                 </div>
//               ))}
//             </div>
//           );
//         })}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { answerAtom, timeTakenAtom } from "../atoms/answers";

export function QuestionTemplate({ content }) {
  const [selectedAnswers, setSelectedAnswers] = useRecoilState(answerAtom);
  const [quizEnded, setQuizEnded] = useState(false);
  const [timerActive, setTimerActive] = useState(true);
  const navigate = useNavigate();
  const initialTime = 5 * 60;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);
  const [timeTaken, setTimeTaken] = useRecoilState(timeTakenAtom);

  function handleOptionChange(questionId, selectedValue) {
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionId - 1] = selectedValue;
      return updatedAnswers;
    });
  }

  function Timer() {
    useEffect(() => {
      let timerInterval;

      if (timerActive && timeRemaining > 0) {
        timerInterval = setInterval(() => {
          setTimeRemaining((prevTime) => prevTime - 1);
        }, 1000);
      } else if (timeRemaining === 0) {
        setTimerActive(false);
        navigate("/page3");
      }

      return () => clearInterval(timerInterval);
    }, [timerActive, timeRemaining]);

    function formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${String(minutes).padStart(2, "0")}:${String(
        remainingSeconds
      ).padStart(2, "0")}`;
    }

    return (
      <div className="text-xl font-medium text-center mb-8 text-white bg-[#272727] w-full sticky top-0 p-2">
        <h1>Timer: {formatTime(timeRemaining)}</h1>
      </div>
    );
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(selectedAnswers);
    console.log("submitted");
    console.log("Quiz Ended");
    setTimerActive(false);
    navigate("/page3");
    setTimeTaken(initialTime - timeRemaining);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#272727] border-white-2 m-2">
      <div className="w-full max-w-md p-8 mx-auto bg-[#272727] shadow-md rounded-md">
        <Timer></Timer>
        <form onSubmit={submitHandler}>
          {content.map((item) => (
            <div key={item.id}>
              <h1 className="text-2xl text-white font-medium mb-4">
                Q{item.id}. {item.question}
              </h1>
              {item.options.map((option, index) => (
                <div key={index} className="flex flex-row p-2 items-center">
                  <input
                    type="radio"
                    id={`selected_answer_${index + 1}_id${item.id}`}
                    name={`selected_answer${item.id}`}
                    value={option}
                    onChange={() => handleOptionChange(item.id, option)}
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 "
                  />
                  <label
                    htmlFor={`selected_answer_${index + 1}_id${item.id}`}
                    className="px-2 block text-xl font-medium text-primary"
                  >
                    {option}
                  </label>
                  <br />
                </div>
              ))}
            </div>
          ))}
          <button className="bg-primary text-white p-2 rounded w-full" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
