import { useState } from 'react'
import './App.css'
import ContactInfo from './components/contactInfo';
import './styles/styles.css'
import EducationalInfo from './components/educationalInfo';

function App() {
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    emailAddress: "",
    telephoneNumber: ""
  });

  const handleContactInfoUpdate = (updatedInfoC) => {
    setContactInfo(updatedInfoC)
  };

  const [educationalInfo, setEducationalInfo] = useState({
    institutionName: "",
    degreeEarned: "",
    yearsAttended: ""
  });

  const handleEducationalInfoUpdate = (updatedInfoE) => {
    setEducationalInfo(updatedInfoE)
  };

  return (
    <>
    <div id="contactInfo">
      <div>
        <ContactInfo onChange = {handleContactInfoUpdate}></ContactInfo>
      </div>
      
      <div>
        <p>{contactInfo.fullName}</p>
        <p>{contactInfo.emailAddress}</p>
        <p>{contactInfo.telephoneNumber}</p>
      </div>
    </div>

    <br>
    </br>
    <br>
    </br>

    <div id="educationalInfo">
      <div>
        <EducationalInfo onChange = {handleEducationalInfoUpdate}></EducationalInfo>
      </div>
      
      <div>
        <p>{educationalInfo.institutionName}</p>
        <p>{educationalInfo.degreeEarned}</p>
        <p>{educationalInfo.yearsAttended}</p>
      </div>
    </div>
    </>
  )
}

export default App;
