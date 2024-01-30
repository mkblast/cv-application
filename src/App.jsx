import { useState } from "react"
import PersonalInfo from "./components/personal-info"
import Education from "./components/education"
import NewEducation from "./components/new-education"

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "Karim Mekircha",
    email: "example@email.com",
    phone: "+213 577 888 999",
    address: "Algeria, Jijel"
  })

  const [education, setEducation] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "A school",
      titleOfStudy: "IDK what is that",
      dateOfStudy: "2013/06/03",
    }
  ])

  return (
    <>
      <PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />

      {education.map(e => {
        return (
          <Education key={e.id} {...e} />
        )
      })}
      <NewEducation education={education} setEducation={setEducation} />
    </>
  )
}

export default App
