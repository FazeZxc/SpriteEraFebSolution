import { useNavigate } from "react-router-dom";

export function Landing() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen bg-[#272727] flex flex-col justify-center items-center">
      <p className="text-white text-2xl">Welcome to the quiz</p>
      <br />
      <button
        className="text-white p-2 rounded bg-primary hover:bg-blue-950"
        onClick={() => {
          navigate("/page2");
        }}
      >
        Start the Quiz
      </button>
    </div>
  );
}
