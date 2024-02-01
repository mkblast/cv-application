import { useState } from "react"
import PersonalInfo from "./components/personal-info"
import Education from "./components/education/education"
import NewEducation from "./components/education/new-education"
import Experience from "./components/experience/experience"
import NewExperience from "./components/experience/new-experience"
import Form from "./components/display"

import "./style/app.css"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Karim Mekircha",
    email: "example@email.com",
    phone: "+213 577 888 999",
    address: "Algeria, Jijel",
  })

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "A school",
      titleOfStudy: "IDK what is that",
      dateOfStudy: "2013/06/03",
    }
  ])

  const [experience, setExperience] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "DA BUSHES",
      position: "CEO",
      responsibilities: "Stuff",
      from: "2003",
      until: "2024",
    }
  ])

  return (
    <div className="app">
      <div className="control">
        <div className="info">
          <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
        </div>

        <div className="education"> Education
          <NewEducation setEducation={setEducation} />

          {education.map((e, i) => {
            return (
              <Education key={e.id} {...e} index={i} setEducation={setEducation} />
            )
          })}
        </div>

        <div className="experience"> Experience
          <NewExperience setExperience={setExperience} />

          {experience.map((e, i) => {
            return (
              <Experience key={e.id} {...e} index={i} setExperience={setExperience} />
            )
          })}
        </div>
      </div>

      <div className="display">
        <Form personalInfo={personalInfo} education={education} experience={experience} />
      </div>
    </div>
  )
}

export default App
