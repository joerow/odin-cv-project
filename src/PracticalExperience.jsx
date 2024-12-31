import { useState } from "react";
import "./App.css";

function PracticalExperience() {
  const [experiences, setExperiences] = useState([
    {
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
      isEditing: true,
    },
  ]);

  const handleChange = (index, field, value) => {
    const newExperiences = [...experiences];
    newExperiences[index][field] = value;
    setExperiences(newExperiences);
  };

  const handleSubmit = (index, e) => {
    e.preventDefault();
    const newExperiences = [...experiences];
    newExperiences[index].isEditing = false;
    setExperiences(newExperiences);
  };

  const handleEdit = (index) => {
    const newExperiences = [...experiences];
    newExperiences[index].isEditing = true;
    setExperiences(newExperiences);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
        isEditing: true,
      },
    ]);
  };

  return (
    <div>
      {experiences.map((experience, index) => (
        <div key={index}>
          <h3>Practical Experience {index + 1}</h3>
          {experience.isEditing ? (
            <form onSubmit={(e) => handleSubmit(index, e)}>
              <div>
                <label>
                  Company Name:
                  <input
                    type="text"
                    value={experience.companyName}
                    onChange={(e) =>
                      handleChange(index, "companyName", e.target.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Position Title:
                  <input
                    type="text"
                    value={experience.positionTitle}
                    onChange={(e) =>
                      handleChange(index, "positionTitle", e.target.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Main Responsibilities:
                  <textarea
                    value={experience.mainResponsibilities}
                    onChange={(e) =>
                      handleChange(
                        index,
                        "mainResponsibilities",
                        e.target.value
                      )
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Date From:
                  <input
                    type="date"
                    value={experience.dateFrom}
                    onChange={(e) =>
                      handleChange(index, "dateFrom", e.target.value)
                    }
                  />
                </label>
              </div>
              <div>
                <label>
                  Date Until:
                  <input
                    type="date"
                    value={experience.dateUntil}
                    onChange={(e) =>
                      handleChange(index, "dateUntil", e.target.value)
                    }
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          ) : (
            <div className="card submitted">
              <h2>Practical Experience {index + 1}</h2>
              <p>
                <strong>Company Name:</strong> {experience.companyName}
              </p>
              <p>
                <strong>Position Title:</strong> {experience.positionTitle}
              </p>
              <p>
                <strong>Main Responsibilities:</strong>{" "}
                {experience.mainResponsibilities}
              </p>
              <p>
                <strong>Date From:</strong> {experience.dateFrom}
              </p>
              <p>
                <strong>Date Until:</strong> {experience.dateUntil}
              </p>
              <button onClick={() => handleEdit(index)}>Edit</button>
            </div>
          )}
        </div>
      ))}
      <button onClick={addExperience}>Add Another Experience</button>
    </div>
  );
}

export default PracticalExperience;
