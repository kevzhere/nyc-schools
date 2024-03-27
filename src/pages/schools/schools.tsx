import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
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
  // TODO: add page index to url
  const [pageIndex, updatePageIndex] = useState<number>(0)
  const totalPages = Math.ceil(schoolData.length / 10)

    
  useEffect(() => {
    updateSchools(schoolData)
  }, [])

  useEffect(() => {
    updateSchools(schoolData.slice(pageIndex, pageIndex + 10))
  }, [pageIndex])

  // debounce to only run filterSchool after 500ms
  const filterSchools = useCallback(
    debounce(value => {
      updateSchools(filterSchool(searchKey, value, schools ?? []))
    }, 500), []
  )


  // to filter school base on key and search string
  const filterSchool = (key: keyof SchoolSatInterface, value: string, currentSchools: SchoolSatInterface[]): SchoolSatInterface[] | undefined =>  currentSchools?.filter((school => school[key]?.toLowerCase().includes(value.toLowerCase())))

  return (<>
    <div className='row justify-content-evenly'>
      <div className='form-group row px-0 mt-3'>
        <div className='col-md-3'>
          <select className="form-select" aria-label="Default select example" defaultValue='school_name' onChange={(v) => updateSearchKey(v.target.value as keyof SchoolSatInterface)}>
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
        {/* TODO: also add next x pages to allow user to fast navigate */}
        <div>
          <button className='me-4' disabled={pageIndex === 0} onClick={() => updatePageIndex(pageIndex - 1)}>prev</button>
          <button disabled={pageIndex === totalPages} value='next' onClick={() => updatePageIndex(pageIndex + 1)}>next</button>
        </div>
      </div>
    </div>
  </>)
}

export default Schools