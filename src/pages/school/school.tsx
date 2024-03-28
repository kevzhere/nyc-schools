import { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../../context/context'
import { SchoolSatInterface } from '../../interfaces/interfaces'

const School = (): JSX.Element => {
  const { state, pathname } = useLocation()
  const schoolData = useContext(GlobalContext)
  const navigate = useNavigate()
  const [currentSchool, updateCurrentSchool] = useState<SchoolSatInterface>()
  
  useEffect(() => {
    updateCurrentSchool(state ?? schoolData.find((school) => school.dbn === pathname.split('/')[2]))
  }, [])

  return (
    <div className='mt-4'>
      <div className='mb-2'><a href='#' onClick={() => navigate('../schools')}>{'< back'}</a></div>
      <h2 className='mb-4'>{currentSchool?.school_name}</h2>
      <div className='row'>
        <div className='col-md-4'>
          <img style={{height: '400px', width: '100%'}}src='https://i.pinimg.com/564x/b9/3f/03/b93f0319675b2a7c8ba1872411d27b2a.jpg'/>
        </div>
        <div className='col-md-8'>
          <div className='row'>
            <div className='col-md-2'><b>Overview:</b></div>
            <div className='col-md-10'>{currentSchool?.overview_paragraph}</div>
          </div>
          <div className='row'>
            <div className='col-md-2'><b>Address:</b></div>
            <div className='col-md-10'>{currentSchool?.location}</div>
          </div>
          <div className='row'>
            <div className='col-md-2'><b>Phone:</b></div>
            <div className='col-md-10'>{currentSchool?.phone_number}</div>
          </div>
          <div className='row'>
            <div className='col-md-2'><b>Website:</b></div>
            <div className='col-md-10'><a href={currentSchool?.website}>{currentSchool?.website}</a></div>
          </div>
          <div className='row'>
            <div className='col-md-2'><b>Grade:</b></div>
            <div className='col-md-10'>{currentSchool?.finalgrades}</div>
          </div>
          {currentSchool?.advancedplacement_courses && <div className='row'>
            <div className='col-md-2'><b>Advance Courses:</b></div>
            <div className='col-md-10'>{currentSchool?.advancedplacement_courses}</div>
          </div>}
          {currentSchool?.language_classes && <div className='row'>
            <div className='col-md-2'><b>Languages:</b></div>
            <div className='col-md-10'>{currentSchool?.language_classes}</div>
          </div>}
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-12'>
          <h3>Opportunities</h3>
          <ul>
            <li>
              {currentSchool?.academicopportunities1}
            </li>
            <li>
              {currentSchool?.academicopportunities2}
            </li>
            {currentSchool?.academicopportunities3 && <li>
              {currentSchool?.academicopportunities3}
            </li>}
            {currentSchool?.academicopportunities4 && <li>
              {currentSchool?.academicopportunities4}
            </li>}
          </ul>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-12'>
          <h3>Average SAT score</h3>
          <ul>
            <li><b>Reading:</b> {currentSchool?.sat_critical_reading_avg_score}</li>
            <li><b>Writing:</b> {currentSchool?.sat_writing_avg_score}</li>
            <li><b>Math:</b> {currentSchool?.sat_math_avg_score}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default School