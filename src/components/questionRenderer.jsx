import { BrowserRouter, Route, Routes } from "react-router-dom";
import { questions } from "../questions";
import { QuestionTemplate } from "./questionsTemplate";
import { Landing } from "./Landing";
import { Results } from "./results";
import { RecoilRoot } from "recoil";

export function QuestionRenderer() {
  return (
    <div>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route
              path="/page1"
              element={<Landing content={questions}></Landing>}
            ></Route>
            <Route
              path="/page2"
              element={
                <QuestionTemplate content={questions}></QuestionTemplate>
              }
            ></Route>
            <Route
              path="/page3"
              element={<Results content={questions}></Results>}
            ></Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}
