import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { GlobalContext } from "../../context/context"
import { SchoolSatInterface } from "../../interfaces/interfaces"

const School = (): JSX.Element => {
  const location = useLocation()
  const schoolData = useContext(GlobalContext)
  const [currentSchool, updateCurrentSchool] = useState<SchoolSatInterface>()
  
  useEffect(() => {
    updateCurrentSchool(location.state ?? schoolData.find((school) => school.dbn === location.pathname.split('/')[2]))
  })

  return (
    <div className='row mt-4'>
      <h2 className='mb-4'>{currentSchool?.school_name}</h2>
      <div className='col-md-4'>
        <img style={{height: '400px', width: '100%'}}src='https://i.pinimg.com/564x/b9/3f/03/b93f0319675b2a7c8ba1872411d27b2a.jpg'/>
      </div>
    </div>
  )
}

export default School