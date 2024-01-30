import { useState } from "react";

function Education({ schoolName, titleOfStudy, dateOfStudy, index, setEducation }) {
  const [edit, setEdit] = useState(false);

  function handleChange(field, index, newValue) {
    setEducation(preArr =>
      preArr.map((item, i) =>
        i === index ? { ...item, [field]: newValue } : item
      )
    )
  }

  function handleDelete(index) {
    setEducation(preArr =>
      preArr.toSpliced(index, 1)
    )
  }

  if (edit) {
    return (
      <div>
        <div>
          <label>
            <input type="text"
              value={schoolName}
              onChange={e =>
                handleChange("schoolName", index, e.target.value)
              }
            />
          </label>
        </div>

        <div>
          <label>
            <input type="text"
              value={titleOfStudy}
              onChange={e =>
                handleChange("titleOfStudy", index, e.target.value)
              }
            />
          </label>
        </div>

        <div>
          <label>
            <input type="text"
              value={dateOfStudy}
              onChange={e =>
                handleChange("dateOfStudy", index, e.target.value)
              }
            />
          </label>
        </div>
        <button onClick={() => setEdit(false)}>Done</button>
      </div>
    )
  }

  return (
    <div>
      <p>{schoolName}</p>
      <p>{titleOfStudy}</p>
      <p>{dateOfStudy}</p>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  );
}

export default Education;
