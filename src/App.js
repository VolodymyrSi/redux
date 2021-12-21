import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllQuestions from "./components/pages/AllQuestions/AllQuestions";
import { AnswersPage } from "./components/pages/AnswersPage/AnswersPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuestions />}></Route>
        <Route path="answers/:questionId" element={<AnswersPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
