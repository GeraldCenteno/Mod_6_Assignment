import { useState } from "react";


function WorkInfo(props){
    const [workInfo, setWorkInfo] = useState({
        companyName: "",
        positionTitle: "",
        yearsWorked: ""
    });

    const handleCompanyNameInputChange = (e) => {
        setWorkInfo(prevInfo => (
            {...prevInfo, companyName: e.target.value}
        ))
        props.onChange({...workInfo, companyName: e.target.value})
    }

    const handlePositionTitleInputChange = (e) => {
        setWorkInfo(prevInfo => (
            {...prevInfo, positionTitle: e.target.value}
        ))
        props.onChange({...workInfo, positionTitle: e.target.value})
    }

    const handleYearsWorkedInputChange = (e) => {
        setWorkInfo(prevInfo => (
            {...prevInfo, yearsWorked: e.target.value}
        ))
        props.onChange({...workInfo, yearsWorked: e.target.value})
    }

    return(
        <div>
            <h2>Work or Volunteer Information:</h2>

            <div>
                <label htmlFor="companyName">Company Name:<br></br></label>
                <input type="text" id="companyName" name="companyName" value={workInfo.companyName} onChange={handleCompanyNameInputChange}/>
            </div>

            <div>
                <label htmlFor="positionTitle">Position Title:<br></br></label>
                <input type="text" id="positionTitle" name="positionTitle" value={workInfo.positionTitle} onChange={handlePositionTitleInputChange}/>
            </div>

            <div>
                <label htmlFor="yearsWorked">Years Worked or Volunteered:<br></br></label>
                <input type="text" id="yearsWorked" name="yearsWorked" value={workInfo.yearsWorked} onChange={handleYearsWorkedInputChange}/>
            </div>
        </div>
    )
}

export default WorkInfo;