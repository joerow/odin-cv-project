import { useState } from "react";
import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>CV App</h1>
      <PersonalInfo />
      <EducationalExperience />
      <PracticalExperience />
    </>
  );
}

export default App;
