function NewEducation({ education, setEducation }) {
  const newField = {
    id: crypto.randomUUID(),
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
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
          <input type="date"
            onChange={e => newField.dateOfStudy = e.target.value}
          />
        </label>
      </div>

      <button onClick={() => setEducation([...education, newField])} >
        Add
      </button>
    </div>
  )
}

export default NewEducation;
