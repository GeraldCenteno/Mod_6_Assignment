import { useState } from 'react'
import './App.css'
import ContactInfo from './components/contactInfo'
import './styles/styles.css'

function App() {
  const [contactInfo, setContactInfo] = useState({
    fullName: "",
    emailAddress: "",
    telephoneNumber: ""
  });

  const handleContactInfoUpdate = (updatedInfo) => {
    setContactInfo(updatedInfo)
  }

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
    </>
  )
}

export default App
