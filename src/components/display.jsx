function Form({ personalInfo, education, experience }) {
  return (
    <div>
      <div>
        <p>{personalInfo.fullName}</p>
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>
      </div>
      <div>
        {
          education.map(e => {
            return (
              <div key={e.id}>
                <p>{e.schoolName}</p>
                <p>{e.titleOfStudy}</p>
                <p>{e.dateOfStudy}</p>
              </div>
            )
          })
        }
      </div>
      <div>
        {
          experience.map(e => {
            return (
              <div key={e.id}>
                <p>{e.companyName}</p>
                <p>{e.position}</p>
                <p>{e.responsibilities}</p>
                <p>{e.from}</p>
                <p>{e.until}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Form;
