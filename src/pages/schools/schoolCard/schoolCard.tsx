import { useNavigate } from "react-router-dom"
import { SchoolSatInterface } from "../../../interfaces/interfaces"
import './schoolCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSchoolFlag } from '@fortawesome/free-solid-svg-icons'

const SchoolCard = ({ schoolData }: {schoolData: SchoolSatInterface}): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="my-3 card" onClick={() => navigate(`./${schoolData.dbn}`, {state: schoolData})}>
      <FontAwesomeIcon icon={faSchoolFlag} size='2x'/>        
      <h5>{schoolData.school_name} ({schoolData.boro})</h5>
      <div className='body'>
        <div>Grades: {schoolData.finalgrades}</div>
        <div>{schoolData.location}</div>
        <div>{schoolData.phone_number}</div>
        <div>{schoolData.school_email}</div>
      </div>
    </div>)
}

export default SchoolCard