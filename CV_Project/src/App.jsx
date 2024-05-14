import { useState } from 'react'
import './App.css'
import './styles/styles.css'
import ContactInfo from './components/contactInfo';
import EducationalInfo from './components/educationalInfo';
import WorkInfo from './components/workInfo';

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

  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    positionTitle: "",
    yearsWorked: ""
  });

  const handleWorkInfoUpdate = (updatedInfoW) => {
    setWorkInfo(updatedInfoW)
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

    <div id="workInfo">
      <div>
        <WorkInfo onChange = {handleWorkInfoUpdate}></WorkInfo>
      </div>
      
      <div>
        <p>{workInfo.companyName}</p>
        <p>{workInfo.positionTitle}</p>
        <p>{workInfo.yearsWorked}</p>
      </div>
    </div>

    </>
  )
}

export default App;
