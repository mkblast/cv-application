function NewEducation({ setEducation }) {
  const newField = {
    id: crypto.randomUUID(),
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  }

  function handleChange(newValue) {
    setEducation(prev =>
      [...prev, newValue]
    )
  }

  return (
    <div className="new-education">
      <div>
        <label> School name:
          <input type="text"
            onChange={e => newField.schoolName = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> Title of Study
          <input type="text"
            onChange={e => newField.titleOfStudy = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> Date of Study
          <input type="text"
            onChange={e => newField.dateOfStudy = e.target.value}
          />
        </label>
      </div>

      <button onClick={() => handleChange(newField)} >
        Add
      </button>
    </div>
  )
}

export default NewEducation;
