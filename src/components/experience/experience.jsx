import { useState } from "react";

function Experience({ companyName, position, responsibilities, from, until, index, setExperience }) {
  const [edit, setEdit] = useState(false);

  function handleChange(field, index, newValue) {
    setExperience(preArr =>
      preArr.map((item, i) =>
        i === index ? { ...item, [field]: newValue } : item
      )
    )
  }


  function handleDelete(index) {
    setExperience(preArr =>
      preArr.toSpliced(index, 1)
    )
  }

  if (edit) {
    return (
      <div>
        <div>
          <label> Company Name:
            <input type="text"
              value={companyName}
              onChange={e =>
                handleChange("companyName", index, e.target.value)
              }
            />
          </label>
        </div>

        <div>
          <label> Position:
            <input type="text"
              value={position}
              onChange={e =>
                handleChange("position", index, e.target.value)
              }
            />
          </label>
        </div>

        <div>
          <label> Responsibilities:
            <input type="text"
              value={responsibilities}
              onChange={e =>
                handleChange("responsibilities", index, e.target.value)
              }
            />
          </label>
        </div>
        <div>
          <label> From:
            <input type="text"
              value={from}
              onChange={e =>
                handleChange("from", index, e.target.value)
              }
            />
          </label>
        </div>
        <div>
          <label> Until:
            <input type="text"
              value={until}
              onChange={e =>
                handleChange("until", index, e.target.value)
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
      <div>{companyName}</div>
      <div>{position}</div>
      <div>{responsibilities}</div>
      <div>{from}</div>
      <div>{until}</div>
      <button onClick={() => setEdit(true)}>Edit</button>
      <button onClick={() => handleDelete(index)}>Delete</button>
    </div>
  )
}

export default Experience;
