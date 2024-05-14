import { useState } from "react";


function ContactInfo(props){
    const [contactInfo, setContactInfo] = useState({
        fullName: "",
        emailAddress: "",
        telephoneNumber: ""
    });

    const handleFullNameInputChange = (e) => {
        setContactInfo(prevInfo => (
            {...prevInfo, fullName: e.target.value}
        ))
        props.onChange({...contactInfo, fullName: e.target.value})
    }

    const handleEmailAddressInputChange = (e) => {
        setContactInfo(prevInfo => (
            {...prevInfo, emailAddress: e.target.value}
        ))
        props.onChange({...contactInfo, emailAddress: e.target.value})
    }

    const handleTelephoneNumberInputChange = (e) => {
        setContactInfo(prevInfo => (
            {...prevInfo, telephoneNumber: e.target.value}
        ))
        props.onChange({...contactInfo, telephoneNumber: e.target.value})
    }

    return(
        <div>
            <h2>Contact Information:</h2>

            <div>
                <label htmlFor="fullName">Full Name:<br></br></label>
                <input type="text" id="fullName" name="fullName" value={contactInfo.fullName} onChange={handleFullNameInputChange}/>
            </div>

            <div>
                <label htmlFor="emailAddress">E-mail Address:<br></br></label>
                <input type="text" id="emailAddress" name="emailAddress" value={contactInfo.emailAddress} onChange={handleEmailAddressInputChange}/>
            </div>

            <div>
                <label htmlFor="telephoneNumber">Telephone Number:<br></br></label>
                <input type="text" id="telephoneNumber" name="telephoneNumber" value={contactInfo.telephoneNumber} onChange={handleTelephoneNumberInputChange}/>
            </div>
        </div>
    )
}

export default ContactInfo;