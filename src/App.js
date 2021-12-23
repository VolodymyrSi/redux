import { Routes, Route } from "react-router-dom";
import AllQuestions from "./components/pages/AllQuestions/AllQuestions";
import AnswersPage from "./components/pages/AnswersPage/AnswersPage";

function App() {
  return (
      <Routes>
        <Route path="/*" element={<AllQuestions />}/>
        <Route path="answers/:questionId" element={<AnswersPage />}/>
      </Routes>
  );
}

export default App;
