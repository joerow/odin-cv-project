import { useState } from "react";

function EducationalExperience() {
  const [schoolName, setSchoolName] = useState("");
  const [titleOfStudy, setTitleOfStudy] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              School Name:
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Title of Study:
              <input
                type="text"
                value={titleOfStudy}
                onChange={(e) => setTitleOfStudy(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Date of Study:
              <input
                type="date"
                value={dateOfStudy}
                onChange={(e) => setDateOfStudy(e.target.value)}
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="card">
          <h2>Educational Experience</h2>
          <p>
            <strong>School Name:</strong> {schoolName}
          </p>
          <p>
            <strong>Title of Study:</strong> {titleOfStudy}
          </p>
          <p>
            <strong>Date of Study:</strong> {dateOfStudy}
          </p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationalExperience;
