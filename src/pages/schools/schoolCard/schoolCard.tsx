import { useNavigate } from "react-router-dom"
import { SchoolSatInterface } from "../../../interfaces/interfaces"


const SchoolCard = ({ schoolData }: {schoolData: SchoolSatInterface}): JSX.Element => {
  const navigate = useNavigate()
  return (
    <div className="my-3" onClick={() => navigate(`./${schoolData.dbn}`, {state: schoolData})}>
      <h5>{schoolData.school_name} ({schoolData.boro})</h5>
      <div>{schoolData.school_email}</div>
      <div>{schoolData.location}</div>
    </div>)
}

export default SchoolCard