import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllQuestions } from "./components/pages/AllQuestions";
import { ExactQuestion } from "./components/pages/ExactQuestion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllQuestions />}></Route>
        <Route path="/exactquestion" element={<ExactQuestion />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
