import { useRecoilValue } from "recoil";
import { answerAtom, timeTakenAtom } from "../atoms/answers";

export function Results() {
  const answers = useRecoilValue(answerAtom);
  const timeTaken = useRecoilValue(timeTakenAtom);
  return (
    <div className="text-lg w-screen h-screen bg-[#272727] flex flex-col justify-center">
      <div className="flex flex-col justify-center py-5 items-center text-white">
        Successfully completed the test!
        <div className="text-primary flex flex-row">
          Time Taken in the Quiz :
          <p className="text-red-500 px-2">{timeTaken}</p> seconds{" "}
        </div>
      </div>
      <div className="flex flex-col px-8 ">
      <h1 className="text-white">Response:</h1>
        {answers.map((item,index) => (
          <div className="text-green-200">{index}) {item}</div>
        ))}
      </div>
    </div>
  );
}
