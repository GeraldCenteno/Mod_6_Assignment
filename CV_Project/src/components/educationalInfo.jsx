import { useState } from "react";


function EducationalInfo(props){
    const [educationalInfo, setEducationalInfo] = useState({
        institutionName: "",
        degreeEarned: "",
        yearsAttended: ""
    });

    const handleInstitutionNameInputChange = (e) => {
        setEducationalInfo(prevInfo => (
            {...prevInfo, institutionName: e.target.value}
        ))
        props.onChange({...educationalInfo, institutionName: e.target.value})
    }

    const handleDegreeEarnedInputChange = (e) => {
        setEducationalInfo(prevInfo => (
            {...prevInfo, degreeEarned: e.target.value}
        ))
        props.onChange({...educationalInfo, degreeEarned: e.target.value})
    }

    const handleYearsAttendedInputChange = (e) => {
        setEducationalInfo(prevInfo => (
            {...prevInfo, yearsAttended: e.target.value}
        ))
        props.onChange({...educationalInfo, yearsAttended: e.target.value})
    }

    return(
        <div>
            <h2>Educational Information:</h2>

            <div>
                <label htmlFor="institutionName">Institution Name:<br></br></label>
                <input type="text" id="institutionName" name="institutionName" value={educationalInfo.institutionName} onChange={handleInstitutionNameInputChange}/>
            </div>

            <div>
                <label htmlFor="degreeEarned">Degree Earned and Field:<br></br></label>
                <input type="text" id="degreeEarned" name="degreeEarned" value={educationalInfo.degreeEarned} onChange={handleDegreeEarnedInputChange}/>
            </div>

            <div>
                <label htmlFor="yearsAttended">Years Attended:<br></br></label>
                <input type="text" id="yearsAttended" name="yearsAttended" value={educationalInfo.yearsAttended} onChange={handleYearsAttendedInputChange}/>
            </div>
        </div>
    )
}

export default EducationalInfo;