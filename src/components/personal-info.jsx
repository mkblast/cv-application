import "../style/personal-info.css"

function PersonalInfo({personalInfo, setPersonalInfo}) {

  const handleInputChange = (field, value) => {
    setPersonalInfo(prevInfo => ({ ...prevInfo, [field]: value }));
  };

  return (
    <div className="personal-info"> Personal Details

      <div className="name-field" >
        <label> Full name:
          <input type="text"
            value={personalInfo.fullName}
            onChange={(e) => handleInputChange("fullName", e.target.value)}
          />
        </label>
      </div>

      <div className="email-field" >
        <label> Email:
          <input type="email"
            value={personalInfo.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </label>
      </div>

      <div className="phone-field" >
        <label> Phone number:
          <input type="tel"
            value={personalInfo.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
          />
        </label>
      </div>

      <div className="address-field" >
        <label> Address:
          <input type="text"
            value={personalInfo.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
          />
        </label>
      </div>

    </div>
  )
}

export default PersonalInfo
