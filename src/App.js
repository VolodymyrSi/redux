import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllQuestions } from "./pages/AllQuestions";
import { ExactQuestion } from "./pages/ExactQuestion";

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
