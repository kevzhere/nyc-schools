import { useCallback, useContext, useEffect, useState } from 'react'
import useSatData from '../../hooks/useSatData'
import useSchoolData from '../../hooks/useSchoolData'
import { mergeDataByKey } from '../../utilities/utilities'
import SchoolCard from './schoolCard/schoolCard'

import  './schools.css'
import { SchoolSatInterface } from '../../interfaces/interfaces'
import { debounce } from 'lodash'
import { GlobalContext } from '../../context/context'

const Schools = () => {
  const schoolData = useContext(GlobalContext)
  const [schools, updateSchools] = useState<SchoolSatInterface[]>()
  const [searchKey, updateSearchKey] = useState<keyof SchoolSatInterface>('school_name')
  

  useEffect(() => {
    updateSchools(schoolData)
  }, [])

  const filterSchools = useCallback(
    debounce(value => {
      updateSchools(filterSchool(searchKey, value))
    }, 500), []
  )

  const filterSchool = (key: keyof SchoolSatInterface, value: string): SchoolSatInterface[] | undefined =>  schoolData?.filter((school => school[key]?.toLowerCase().includes(value.toLowerCase())))

  return (<>
    <div className='row justify-content-evenly'>
      <div className='form-group row px-0 mt-3'>
        <div className='col-md-3'>
          <select className="form-select" aria-label="Default select example" defaultValue='school_name'>
            <option value='school_name'>Name</option>
            <option value="city">City</option>
            <option value="zip">Zip</option>
          </select>
        </div>
        <div className='col-md-9 ps-0'>
          <input type='text' className='form-control' id='inputSearch' placeholder='Search' onChange={(v) => filterSchools(v.target.value)}/>
        </div>
      </div>
      <div className='row text-center schools'>
        {schools?.map((data) => <div key={data.dbn} className='card'>
          <SchoolCard schoolData={data}/>
        </div>)}
      </div>
    </div>
  </>)
}

export default Schools