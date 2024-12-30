import "./App.css";
import PersonalInfo from "./PersonalInfo";
import EducationalExperience from "./EducationalExperience";
import PracticalExperience from "./PracticalExperience";

function App() {
  return (
    <div className="container">
      <h1>CV App</h1>
      <PersonalInfo />
      <EducationalExperience />
      <PracticalExperience />
    </div>
  );
}

export default App;
