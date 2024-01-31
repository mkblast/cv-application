function NewExperience({ setExperience }) {
  const newField = {
    id: crypto.randomUUID(),
    companyName: "",
    position: "",
    responsibilities: "",
    from: "",
    until: "",
  }

  function handleChange(newValue) {
    setExperience(prev =>
      [...prev, newValue]
    )
  }

  return (
    <div className="new-experience"> Add new Experience field:
      <div>
        <label> Company name:
          <input type="text"
            onChange={e => newField.companyName = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> Position:
          <input type="text"
            onChange={e => newField.position = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> Responsibilities:
          <input type="text"
            onChange={e => newField.responsibilities = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> From:
          <input type="text"
            onChange={e => newField.from = e.target.value}
          />
        </label>
      </div>

      <div>
        <label> Until:
          <input type="text"
            onChange={e => newField.until = e.target.value}
          />
        </label>
      </div>

      <button onClick={() => handleChange(newField)} >
        Add
      </button>
    </div>
  )
}

export default NewExperience;
